import express from 'express';
import { home, getUpload, postUpload, search } from '../controllers/videoController';
import { login, logout, getJoin, postJoin } from '../controllers/userController';

const globalRouter = express.Router();

globalRouter.use('/login', login);
globalRouter.use('/logout', logout);
globalRouter.use('/search', search);
globalRouter.route('/join').get(getJoin).post(postJoin);
globalRouter.route('/upload').get(getUpload).post(postUpload);
globalRouter.use('/', home);

export default globalRouter;
