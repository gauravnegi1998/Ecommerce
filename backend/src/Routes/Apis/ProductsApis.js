import { Router } from 'express';
import CategoriesController from '../../Controllers/CategoriesController.js';
import AuthCheck from '../../middleware/AuthCheck.js';
import ProductsController from '../../Controllers/ProductsController.js';

const ProductRouter = Router();

ProductRouter.route('/webCategories')
    .get(CategoriesController._getCategoryList)
    .post(CategoriesController._addCategory)
// .delete(':id', ProductsController._deleteCategory)


ProductRouter.route('/webCategories/:id')
    .delete(CategoriesController._deleteCategory)


ProductRouter.route('/')
    .post(AuthCheck._checkAuth, AuthCheck.restrict('admin'), ProductsController._addProducts)


export default ProductRouter;