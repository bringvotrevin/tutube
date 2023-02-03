import express from "express";
import {editProfile, deleteProfile, detail, changePassword} from "../controllers/userController"

const userRouter = express.Router();

userRouter.get('/profile', editProfile);
userRouter.get('/delete', deleteProfile);
userRouter.get('/detail', detail);
userRouter.get('changePassword', changePassword);

export default userRouter;