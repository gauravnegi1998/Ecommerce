import { Router } from 'express';
import CategoriesController from '../../Controllers/CategoriesController.js';
import AuthCheck from '../../middleware/AuthCheck.js';
import ProductsController from '../../Controllers/ProductsController.js';
import { asyncErrorHandler } from '../../Utils/ErrorsHandlers.js';

const ProductRouter = Router();

ProductRouter.route('/webCategories')
    .get(asyncErrorHandler(CategoriesController._getCategoryList))
    .post(asyncErrorHandler(CategoriesController._addCategory))
// .delete(':id', ProductsController._deleteCategory)


ProductRouter.route('/webCategories/:id')
    .delete(asyncErrorHandler(CategoriesController._deleteCategory))


ProductRouter.route('/')
    .post(AuthCheck._checkAuth, AuthCheck.restrict('admin'), asyncErrorHandler(ProductsController._addProducts))


export default ProductRouter;