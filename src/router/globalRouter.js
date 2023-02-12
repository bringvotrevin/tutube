import express from 'express';
import {trending} from '../controllers/videoController';
import {login, logout, join} from '../controllers/userController';
const globalRouter = express.Router();


globalRouter.use('/login', login);
globalRouter.use('/logout', logout);
globalRouter.use('/join', join);
globalRouter.use('/', trending);
globalRouter.route('/upload').get(getUpload).post(postUpload);

export default globalRouter;