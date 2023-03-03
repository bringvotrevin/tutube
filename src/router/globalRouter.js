import express from 'express';
import { home, getUpload, postUpload, search } from '../controllers/videoController';
import {
  getLogin,
  postLogin,
  logout,
  getJoin,
  postJoin,
} from '../controllers/userController';

const globalRouter = express.Router();

globalRouter.route('/login').get(getLogin).post(postLogin);
globalRouter.use('/logout', logout);
globalRouter.use('/search', search);
globalRouter.route('/join').get(getJoin).post(postJoin);
globalRouter.route('/upload').get(getUpload).post(postUpload);
globalRouter.use('/', home);

export default globalRouter;
