import express from "express";
import {watch, editVideo, postVideo, search, deleteVideo, share, upload} from "../controllers/videoController";

const videoRouter = express.Router();


videoRouter.get('/:id(\\d+)', watch);
videoRouter.route('/:id(\\d+)/edit').get(editVideo).post(postVideo);
videoRouter.get('/:id(\\d+)/delete', deleteVideo);
videoRouter.get('/upload', upload);
// videoRouter.get('/search', search);
// videoRouter.get('/share', share);

export default videoRouter;