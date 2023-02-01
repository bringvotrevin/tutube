import express from "express";

const userRouter = express.Router();

const profile = (req, res, next) => {
	return res.send("PROFILE");
}

userRouter.use('/profile', profile);

export default userRouter;