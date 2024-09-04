
import { Router } from 'express';
import customerApisRouter from './Apis/customerApis.js';
import sessionRouter from './Apis/sessionUrl.js';
import AuthRouting from './Apis/Authentication.js';
import ProductRouter from './Apis/ProductsApis.js';
import cartRouter from './Apis/CartAPIs.js';

const router = Router();

router.use('/api/customers', customerApisRouter);
router.use('/session', sessionRouter);
router.use('/login', AuthRouting);
router.use('/items', ProductRouter)
router.use('/cart', cartRouter);

export default router;