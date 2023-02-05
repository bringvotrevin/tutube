import express from 'express';
import {trending} from '../controllers/videoController';
import {login, join} from '../controllers/userController';
const globalRouter = express.Router();


globalRouter.use('/', trending);
// globalRouter.use('/login', login);
globalRouter.use('/join', join);

export default globalRouter;