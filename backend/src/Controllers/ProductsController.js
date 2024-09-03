import mongoose from "mongoose";
import ProductModel from "../Model/ProductSchema.js";
import { notFoundError } from "../Utils/ErrorsHandlers.js";
import _ from "lodash";

class ProductsControllerClass {

    constructor() {
        this._addProducts = this._addProductsApi.bind(this);
    }

    _addProductsApi = async (req, res) => {
        const AddProducts = await ProductModel.create(req.body);
        if (AddProducts) {
            console.log(AddProducts, 'AddProducts')
            res.status(200).json({ status: 'ok', message: 'Product Added successfully' })
        }
    }

    _getProductApi = async (req, res) => {
        const LIMIT = req.query?.limit || 9;
        const PAGE = req.query?.page ? (+req.query?.page - 1) * +LIMIT : 0;
        const CAT_ID = req.query?.catId || null;

        let CategoryData = null;
        const CONDITION = [{
            $facet: {
                data: [{ $skip: +PAGE }, { $limit: +LIMIT }, { $project: { __v: 0 } }],
                total: [{ $count: 'count' }]
            }
        },
        {
            $project: {
                _id: 0,
                product_data: '$data',
                totalCount: { $first: '$total.count' },
                page: `${req?.query?.page}`
            }
        }];

        if (CAT_ID) {
            CategoryData = ProductModel.aggregate([

                { $unwind: '$webCategories' },
                {
                    $lookup: {
                        from: "categories", localField: "webCategories",
                        foreignField: 'categoryId',
                        as: "webCategories", pipeline: [
                            { $project: { _id: 1 } },
                        ]
                    }
                },
                { $unwind: '$webCategories' },
                { $match: { "webCategories._id": new mongoose.Types.ObjectId(String(CAT_ID)) } },
                ...CONDITION
            ])

        } else {
            CategoryData = ProductModel.aggregate([
                {
                    $lookup: { from: "categories", localField: 'webCategories', foreignField: "categoryId", as: "webCategories", pipeline: [{ $project: { __v: 0 } }] }
                },
                ...CONDITION
            ]);
        }
        // {
        //     $unwind: {
        //         path: "$webCategories",
        //         preserveNullAndEmptyArrays: true,
        //     }
        // },

        // { $project: { title: "$$ROOT" } }
        // {
        //     $group: {
        //         _id: "$_id",
        //         webCategories: {
        //             $push: "$webCategories",
        //         },
        //     },
        // }


        if (CategoryData) {
            res.status(200).json({ status: 'ok', data: await CategoryData.then((r) => r[0]) })
        }
    }

    _getProductSingleApi = async (req, res, next) => {
        const ID = req?.params?.id;

        const DATA = await ProductModel.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(String(ID)) } },
            {
                $lookup: { from: "categories", localField: 'webCategories', foreignField: "categoryId", as: "webCategories", pipeline: [{ $project: { __v: 0 } }] }
            },
            {
                $lookup: {
                    from: "reviews", localField: 'reviews', foreignField: "_id", as: "reviews", pipeline: [
                        { $project: { __v: 0 } },
                        {
                            $lookup: {
                                from: "customers", localField: "customer", foreignField: "_id", as: "user", pipeline: [
                                    { $project: { firstName: 1, lastName: 1, email: 1 } }
                                ]
                            }
                        },
                        { $unwind: "$user" },
                    ]
                }
            }
        ]).then(r => r[0])
        // const DATA = await ProductModel.findById(ID);
        // notFoundError(DATA, `No prouct found with given ID ${ID}`, next);

        return res.status(200).json({ status: 'ok', data: DATA });
    }

}

const ProductController = new ProductsControllerClass()
export default ProductController;