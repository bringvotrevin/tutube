import express from "express";
import {watch, edit, search, deleteVideo, share, upload} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get('/watch', watch);
videoRouter.get('/edit', edit);
videoRouter.get('/search', search);
videoRouter.get('/delete', deleteVideo);
videoRouter.get('/share', share);
videoRouter.get('/upload', upload);

export default videoRouter;