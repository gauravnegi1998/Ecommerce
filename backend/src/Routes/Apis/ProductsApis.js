import { Router } from 'express';
import ProductsController from '../../Controllers/ProductsController.js';

const ProductRouter = Router();

ProductRouter.route('/webCategories')
    .get(ProductsController._getCategoryList)
    .post(ProductsController._addCategory)


export default ProductRouter;