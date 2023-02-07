import express from 'express';
import {trending} from '../controllers/videoController';
import {login, join} from '../controllers/userController';
const globalRouter = express.Router();


globalRouter.use('/login', login);
// globalRouter.user('/logout', logout);
globalRouter.use('/join', join);
globalRouter.use('/', trending);

export default globalRouter;