import express from 'express';
import { watch, editVideo, postEditedVideo, search, deleteVideo, share } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/:id(\\d+)', watch);
videoRouter.route('/:id(\\d+)/edit').get(editVideo).post(postEditedVideo);
videoRouter.get('/:id(\\d+)/delete', deleteVideo);
// videoRouter.get('/search', search);
// videoRouter.get('/share', share);

export default videoRouter;
