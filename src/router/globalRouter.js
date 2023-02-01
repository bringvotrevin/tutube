import express from "express";

const globalRouter = express.Router();

const home = (req, res, next) => {
	return res.send("HOME");
}

globalRouter.use("/", home);

export default globalRouter;