import express from 'express';
import { home, getUpload, postUpload } from '../controllers/videoController';
import { login, logout, join } from '../controllers/userController';

const globalRouter = express.Router();

globalRouter.use('/login', login);
globalRouter.use('/logout', logout);
globalRouter.use('/join', join);
globalRouter.route('/upload').get(getUpload).post(postUpload);
globalRouter.use('/', home);

export default globalRouter;
