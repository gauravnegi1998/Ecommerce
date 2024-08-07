import ProductModel from "../Model/ProductSchema.js";
import ReviewModel from "../Model/reviewSchema.js";
import CustomError from "../Utils/CustomError.js";
import { notFoundError } from "../Utils/ErrorsHandlers.js";

class ReviewController {

    static _addReview = async (req, res, next) => {
        const USER = req.currentUser || "";
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


        const DATA = await ReviewModel.create({ ...req?.body, productId: ProductId });
        if (!DATA) {
            const error = new CustomError('something went wrong please type again!', 400);
            return next(error);
        }
        await ProductModel.findOneAndUpdate({ _id: ProductId }, { reviews: [...PRODUCT_DATA?.reviews, DATA?._id] }, { new: true });

        return res.status(201).json({ status: 'ok', message: "you have successfully added your review" })
    }

    static _getReview = async (req, res, next) => {
        const ProductId = req.params.id || null;

        if (!ProductId) {
            const error = new CustomError("Product ID is required", 400);
            return next(error);
        }
        const DATA = await ReviewModel.find();
        notFoundError(DATA, "provided review id is wrong", next)
        return res.status(201).json({ status: 'ok', message: "you have successfully added your review" })
    }
}

export default ReviewController;