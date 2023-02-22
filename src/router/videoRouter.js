import express from 'express';
import { watch, editVideo, postEditedVideo, search, deleteVideo, share } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/:id([0-9a-f]{24})', watch);
videoRouter.route('/:id([0-9a-f]{24})/edit').get(editVideo).post(postEditedVideo);
videoRouter.get('/:id([0-9a-f]{24})/delete', deleteVideo);
// videoRouter.get('/search', search);
// videoRouter.get('/share', share);

export default videoRouter;
