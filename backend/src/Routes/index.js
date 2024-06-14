
import { Router } from 'express';
import customerApisRouter from './Apis/customerApis.js';

const router = Router();

router.use('/api/customers', customerApisRouter);

export default router;