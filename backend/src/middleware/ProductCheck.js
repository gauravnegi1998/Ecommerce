import { CartModel } from "../Model/cartSchema.js";
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


export const _cartCheck = async (req, res, next) => {
    const ID = req?.params?.id;
    const USER_ID = req.currentUser._id || "";
    const USER_DATA = await CartModel.findOne({ user: USER_ID });

    if (!USER_DATA) {
        notFoundError(USER_DATA, `something went wrong please try again later`, next);
    }

    req.cartData = USER_DATA;
    next();
}