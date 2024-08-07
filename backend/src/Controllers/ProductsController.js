import ProductModel from "../Model/ProductSchema.js";

class ProductsControllerClass {

    constructor() {
        this._addProducts = this._addProductsApi.bind(this);
    }

    _addProductsApi = async (req, res) => {
        const AddProducts = await ProductModel.create(req.body);
        if (AddProducts) {
            console.log(AddProducts, 'AddProducts')
            res.status(200).json({ success: 'ok', message: 'Product Added successfully' })
        }
    }

    _getProductApi = async (req, res) => {
        const CategoryData = await ProductModel.aggregate([
            {
                $lookup: { from: "categories", localField: 'webCategories', foreignField: "categoryId", as: "webCategories", pipeline: [{ $project: { __v: 0 } }] }
            },
            {
                $lookup: {
                    from: "reviews", localField: 'reviews', foreignField: "_id", as: "reviews", pipeline: [{ $project: { __v: 0 } },
                    {
                        $lookup: { from: "customers", localField: "customer", foreignField: "_id", as: "user", pipeline: [{ $project: { firstName: 1, lastName: 1 } }] }
                    },
                    { $unwind: "$user" }
                    ]
                }
            },
        ])
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
            // console.log(CategoryData, 'AddProducts')
            res.status(200).json({ success: 'ok', data: CategoryData, message: 'Product Added successfully' })
        }
    }

}

const ProductController = new ProductsControllerClass()
export default ProductController;