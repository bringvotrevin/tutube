import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, minlength: 5 },
  description: { type: String, trim: true, maxlength: 50 },
  createdAt: { type: Date, default: Date.now, trim: true },
  hashTags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
  },
});

// eslint-disable-next-line prefer-arrow-callback
videoSchema.static('formatHashTags', function (hashTags) {
  return hashTags.split(',').map((tag) => {
    const newTag = tag.trim();
    return newTag.trim().startsWith('#') ? newTag : `#${newTag}`;
  });
}); // NOTE static 내 arrow function 사용금지

const Video = mongoose.model('Video', videoSchema);

export default Video;
