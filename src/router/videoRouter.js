import express from "express";

const videoRouter = express.Router();

const edit = (req, res, next) => {
	return res.send("EDIT");
}

videoRouter.use('/edit', edit);

export default videoRouter;