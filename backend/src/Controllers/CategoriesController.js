import categoryModel from "../Model/categorySchema.js";
import ErrorHandler from "../Utils/ErrorsHandlers.js";

class CategoriesController {


    static _getCategoryList = ErrorHandler.asyncErrorHandler(async (req, res) => {
        const LIMIT = Number(req?.query?.limit) || 6;
        const SKIP = Number(req?.query?.page) ? (Number(req?.query?.page) - 1) * LIMIT : 0;
        const CategoryData = await categoryModel.find().skip(SKIP).limit(LIMIT);
        const CountProducts = await categoryModel.countDocuments({});
        res.status(200).json({ status: 'ok', data: CategoryData, totalCount: CountProducts })
    })

    static async _addCategory(req, res) {
        try {
            const AddCategory = new categoryModel(req?.body);
            AddCategory.save().then((response) => {
                res.status(201).json({ status: 'ok', message: 'you have successfully added category.' })
            }).catch(() => {
                res.status(400).json({ status: 'error', message: 'something went wrong try again' })
            })
        } catch (err) {
            res.status(500).json({ status: 'error', data: JSON.stringify(err), message: 'server Error' })
            console.log(err, '>>>>>>>>>>>>>>>>>>> ProductController - _addCategory')
        }
    }

    static async _deleteCategory(req, res) {
        try {
            const DELETE_CATEGORY = await categoryModel.findByIdAndDelete(req?.params?.id);
            if (DELETE_CATEGORY) {
                res.status(200).json({ status: 'ok', message: "category deleted successfully" })
            } else {
                res.status(400).json({ status: 'error', message: "something went wrong" })
            }

        } catch (err) {
            res.status(500).json({ status: 'error', data: JSON.stringify(err), message: 'server Error' })
            console.log(err, '>>>>>>>>>>>>>>>>>>> ProductController - _addCategory')
        }
    }




}

export default CategoriesController;