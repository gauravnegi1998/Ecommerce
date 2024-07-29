import ProductModel from "../Model/ProductSchema.js";
import ErrorHandler from "../Utils/ErrorsHandlers.js";

class ProductsControllerClass {

    constructor() {
        this._addProducts = this._addProductsApi.bind(this);
    }

    _addProductsApi = ErrorHandler.asyncErrorHandler(async (req, res) => {
        const AddProducts = await ProductModel.create(req.body);
        if (AddProducts) {
            console.log(AddProducts, 'AddProducts')
            res.status(200).json({ success: 'ok', message: 'Product Added successfully' })
        }
    })

}

const ProductController = new ProductsControllerClass()
export default ProductController;