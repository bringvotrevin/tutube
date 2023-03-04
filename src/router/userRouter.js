import express from 'express';
import { editProfile, getDeleteProfile, postDeleteProfile, detail, changePassword } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/profile', editProfile);
userRouter.route('/deleteProfile').get(getDeleteProfile).post(postDeleteProfile);
// userRouter.get('/detail', detail);
// userRouter.get('changePassword', changePassword);

export default userRouter;
