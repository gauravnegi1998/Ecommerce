import { Router } from 'express';
import CategoriesController from '../../Controllers/CategoriesController.js';
import AuthCheck from '../../middleware/AuthCheck.js';
import ProductsController from '../../Controllers/ProductsController.js';
import { asyncErrorHandler } from '../../Utils/ErrorsHandlers.js';
import ReviewController from '../../Controllers/ReviewController.js';
import { _productCheck } from '../../middleware/ProductCheck.js';

const ProductRouter = Router();

ProductRouter.route('/web-categories')
    .get(asyncErrorHandler(CategoriesController._getCategoryList))
    .post(asyncErrorHandler(CategoriesController._addCategory))
// .delete(':id', ProductsController._deleteCategory)


ProductRouter.route('/web-categories/:id')
    .delete(asyncErrorHandler(CategoriesController._deleteCategory))


ProductRouter.route('/')
    .get(ProductsController._getProductApi)
    .post(AuthCheck._checkAuth, AuthCheck.restrict('admin'), asyncErrorHandler(ProductsController._addProducts))


ProductRouter.route('/:id').get(asyncErrorHandler(ProductsController._getProductSingleApi))

ProductRouter.route('/:id/review')
    .get(asyncErrorHandler(ReviewController._getReview))
    .post(AuthCheck._checkAuth, _productCheck, asyncErrorHandler(ReviewController._addReview))
    .put(AuthCheck._checkAuth, _productCheck, asyncErrorHandler(ReviewController._updateReview))

ProductRouter.route('/:id/review/:reviewId')
    .delete(AuthCheck._checkAuth, _productCheck, asyncErrorHandler(ReviewController._deleteReview))


export default ProductRouter;