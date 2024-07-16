
import { Router } from 'express';
import customerApisRouter from './Apis/customerApis.js';
import sessionRouter from './Apis/sessionUrl.js';
import AuthRouting from './Apis/Authentication.js';

const router = Router();

router.use('/api/customers', customerApisRouter);
router.use('/session', sessionRouter);
router.use('/login', AuthRouting);

export default router;