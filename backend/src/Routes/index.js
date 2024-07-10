
import { Router } from 'express';
import customerApisRouter from './Apis/customerApis.js';
import sessionRouter from './Apis/sessionUrl.js';

const router = Router();

router.use('/api/customers', customerApisRouter);
router.use('/session', sessionRouter);

export default router;