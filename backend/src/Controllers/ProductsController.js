import categoryModel from "../Model/categorySchema.js";

class ProductsController {

    static async _getCategoryList(req, res) {
        try {
            const LIMIT = Number(req?.query?.limit) || 6;
            const SKIP = Number(req?.query?.page) ? (Number(req?.query?.page) - 1) * LIMIT : 0;
            const CategoryData = await categoryModel.find().skip(SKIP).limit(LIMIT);
            const CountProducts = await categoryModel.countDocuments({});
            res.status(200).json({ status: 'ok', data: CategoryData, totalCount: CountProducts })
        } catch (err) {
            res.status(500).json({ status: 'error', data: JSON.stringify(err), msg: 'server Error' })
            console.log(err, '>>>>>>>>>>>>>>>>>>> ProductController - _getCategoryList')
        }
    }

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

}

export default ProductsController;