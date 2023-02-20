import express from 'express';
import { watch, editVideo, postEditedVideo, search, getDeleteVideo, postDeleteVideo, share } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/:id([0-9a-f]{24})', watch);
videoRouter.route('/:id([0-9a-f]{24})/edit').get(editVideo).post(postEditedVideo);
// videoRouter.route('/:id(\\d+)/delete').get(getDeleteVideo).post(postDeleteVideo);
// videoRouter.get('/search', search);
// videoRouter.get('/share', share);

export default videoRouter;
