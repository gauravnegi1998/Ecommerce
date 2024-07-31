import categoryModel from "../Model/categorySchema.js";
import { notFoundError } from "../Utils/ErrorsHandlers.js";

class CategoriesController {


    static _getCategoryList = async (req, res) => {
        const LIMIT = Number(req?.query?.limit) || 6;
        const SKIP = Number(req?.query?.page) ? (Number(req?.query?.page) - 1) * LIMIT : 0;
        const CategoryData = await categoryModel.find().skip(SKIP).limit(LIMIT);
        const CountProducts = await categoryModel.countDocuments({});
        res.status(200).json({ status: 'ok', data: CategoryData, totalCount: CountProducts })
    }

    static async _addCategory(req, res) {
        await categoryModel.create(req?.body);
        res.status(201).json({ status: 'ok', message: 'you have successfully added category.' })
    }

    static async _deleteCategory(req, res, next) {
        const DELETE_CATEGORY = await categoryModel.findByIdAndDelete(req?.params?.id);
        notFoundError(DELETE_CATEGORY, `category Id (${req.params?.id}) not available`, next);
        if (DELETE_CATEGORY) {
            res.status(200).json({ status: 'ok', message: "category deleted successfully" })
        }
    }




}

export default CategoriesController;