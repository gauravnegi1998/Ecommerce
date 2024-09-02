import _ from "lodash";
import ProductModel from "../Model/ProductSchema.js";
import ReviewModel from "../Model/reviewSchema.js";
import CustomError from "../Utils/CustomError.js";
import { notFoundError } from "../Utils/ErrorsHandlers.js";
import mongoose from "mongoose";

class ReviewController {


    static _addReview = async (req, res, next) => {
        const USER = req.currentUser || "";
        const ProductId = req.params.id || null;

        const DATA = await ReviewModel.create({ ...req?.body, customer: USER?._id, productId: ProductId });
        if (!DATA) {
            const error = new CustomError('something went wrong please type again!', 400);
            return next(error);
        }
        await ProductModel.findOneAndUpdate({ _id: ProductId }, { reviews: [...req?.products?.reviews, DATA?._id] }, { new: true });

        return res.status(201).json({ status: 'ok', message: "you have successfully added your review" })
    }

    static _updateReview = async (req, res, next) => {
        const Data = await ReviewModel.findOneAndUpdate({ _id: req?.body?.id }, req?.body?.data, { new: true });
        notFoundError(Data, 'something Went wrong,Please try later', next)
        console.log(req?.body, 'req?.body?.id', Data)

        return res.status(200).json({ status: 'ok', message: "You have successfully update the review's" })
    }

    static _deleteReview = async (req, res, next) => {
        const { id, reviewId } = req.params;
        const DATA = await ReviewModel.findOneAndDelete({ _id: reviewId });
        notFoundError(DATA, `ID ${reviewId} is not found`, next);
        const REMAIN_REVIEW = _.filter(req?.products?.reviews, (r) => r.toString() !== reviewId);;
        await ProductModel.findOneAndUpdate({ _id: id }, { reviews: REMAIN_REVIEW }, { new: true })
        return res.status(200).json({ status: "ok", message: 'Review successfully deleted !' })
    }

    static _getReview = async (req, res, next) => {
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

        const DATA = await ReviewModel.find();
        notFoundError(DATA, "provided review id is wrong", next)
        return res.status(201).json({ status: 'ok', message: "you have successfully added your review" })
    }
}

export default ReviewController;