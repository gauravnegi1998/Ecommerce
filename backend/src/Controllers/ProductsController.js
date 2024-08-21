import ProductModel from "../Model/ProductSchema.js";

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
        const PAGE = req.query?.page ? (+req.query?.page - 1) * +LIMIT : 0
        console.log(LIMIT, PAGE, 'LIMIT,PAGE')
        const CategoryData = await ProductModel.aggregate([
            {
                $lookup: { from: "categories", localField: 'webCategories', foreignField: "categoryId", as: "webCategories", pipeline: [{ $project: { __v: 0 } }] }
            },
            {
                $lookup: {
                    from: "reviews", localField: 'reviews', foreignField: "_id", as: "reviews", pipeline: [{ $project: { __v: 0 } },
                    {
                        $lookup: {
                            from: "customers", localField: "customer", foreignField: "_id", as: "user", pipeline: [
                                { $project: { firstName: 1, lastName: 1, email: 1 } }
                            ]
                        }
                    },
                    { $unwind: "$user" },
                        // { count: { $sum: 1 } }
                    ]
                }
            },
            {
                $facet: {
                    data: [{ $skip: +PAGE }, { $limit: +LIMIT }],
                    total: [{ $count: 'count' }]
                }
            },
            { $project: { _id: 0, data: '$data', totalCount: { $first: '$total.count' } } }

        ]).then((r) => r[0]);

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
            res.status(200).json({ status: 'ok', data: CategoryData })
        }
    }

}

const ProductController = new ProductsControllerClass()
export default ProductController;