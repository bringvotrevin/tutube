import Video from '../models/Video';

export const home = async (req, res) => {
  const videos = await Video.find({});
  console.log(videos);
  res.render('home', { pageTitle: 'home', videos });
};
export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (video) {
    return res.render('watch', { pageTitle: 'watch', video });
  }
  return res.render('error', { pageTitle: 'Video not found', id });
};
export const editVideo = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  res.render('editVideo', { pageTitle: 'edit video', video });
};
export const postEditedVideo = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashTags } = req.body;
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashTags: hashTags.split(',').map((hashTag) => (hashTag.startsWith('#') ? hashTag : `#${hashTag}`)),
  });
  res.redirect(`/video/${req.params.id}`);
};
export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect('/');
};

export const getUpload = (req, res) => {
  res.render('upload', { pageTitle: 'upload video' });
};
export const postUpload = async (req, res) => {
  const { title, description, hashTags } = req.body;
  const video = new Video({
    title,
    description,
    hashTags: hashTags.split(',').map((word) => `#${word}`),
  });
  await video.save();
  res.redirect('/');
};

export const search = async (req, res) => {
  const { videoTitle } = req.query;
  const exist = await Video.exists({ title: videoTitle });
  if (!exist) {
    return res.render('search');
  }
  const video = await Video.findOne({ title: videoTitle });
  return res.render('watch', { pageTitle: 'watch', video });
};
// export const share = (req, res) => res.render("share");
