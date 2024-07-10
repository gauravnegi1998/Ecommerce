import { Router } from 'express';
import sessionUse from '../../Controllers/sessionUse.js';

const sessionRouter = Router();

sessionRouter.get('/user-session', sessionUse.getSessionData);
sessionRouter.get('/set-session', sessionUse.setSessionStore);

export default sessionRouter;