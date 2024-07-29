import categoryModel from "../Model/categorySchema.js";
import ApiFeatures from "../Utils/ApiFeatures.js";
import ErrorHandler from "../Utils/ErrorsHandlers.js";

class CategoriesController {

    static _getCategoryList = ErrorHandler.asyncErrorHandler(async (req, res) => {

        const QUERY = new ApiFeatures(categoryModel.find(), req.query).pagination()
        const CategoryData = await QUERY.query;
        const CountProducts = await categoryModel.countDocuments();
        res.status(200).json({ status: 'ok', data: CategoryData, totalCount: CountProducts })
    })

    static _addCategory = ErrorHandler.asyncErrorHandler(async (req, res) => {
        const AddCategory = new categoryModel(req?.body);
        AddCategory.save().then((response) => {
            res.status(201).json({ status: 'ok', message: 'you have successfully added category.' })
        }).catch(() => {
            res.status(400).json({ status: 'error', message: 'something went wrong try again' })
        })
    })

    static _deleteCategory = ErrorHandler.asyncErrorHandler(async (req, res, next) => {
        const DELETE_CATEGORY = await categoryModel.findByIdAndDelete(req?.params?.id);
        ErrorHandler.notFoundError(DELETE_CATEGORY, "Enter Id dosen't exist", next);
        res.status(200).json({ status: 'ok', message: "category deleted successfully" })
    })

}

export default CategoriesController;