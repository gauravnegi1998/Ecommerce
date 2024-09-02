import ProductModel from "../Model/ProductSchema.js";
import CustomError from "../Utils/CustomError.js";

export const _productCheck = async (req, res, next) => {
    const ProductId = req.params.id || null;

    if (!ProductId) {
        const error = new CustomError("Product ID is required", 400);
        return next(error);
    }

    const PRODUCT_DATA = await ProductModel.findById(ProductId);
    if (!PRODUCT_DATA) {
        const error = new CustomError("Please enter valid Product ID", 400);
        return next(error);
    }

    req.products = PRODUCT_DATA;
    next();
}