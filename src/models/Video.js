import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 5 },
  description: { type: String, maxlength: 50 },
  createdAt: { type: Date, default: Date.now },
  hashTags: [{ type: String }],
  meta: {
    views: { type: Number, required: true, default: 0 },
    rating: { type: Number, required: true, default: 0 },
  },
});

const Video = mongoose.model('Video', videoSchema);

export default Video;
