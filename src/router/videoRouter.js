import express from 'express';
import { watch, editVideo, postEditedVideo, search, getDeleteVideo, postDeleteVideo, share } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/:id(\\d+)', watch);
videoRouter.route('/:id(\\d+)/edit').get(editVideo).post(postEditedVideo);
// videoRouter.route('/:id(\\d+)/delete').get(getDeleteVideo).post(postDeleteVideo);
// videoRouter.get('/search', search);
// videoRouter.get('/share', share);

export default videoRouter;
