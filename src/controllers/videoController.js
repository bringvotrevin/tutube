import Video from '../models/Video';

export const home = async (req, res) => {
  const videos = await Video.find({});
  console.log(videos);
  res.render('home', { pageTitle: 'home', videos });
};
export const watch = (req, res) => {
  res.render('watch', { pageTitle: 'watch' });
};
export const editVideo = (req, res) => {
  res.render('editVideo', { pageTitle: 'edit video' });
};
export const postEditedVideo = (req, res) => {
  res.redirect(`/video/${req.params.id}`);
};
export const getDeleteVideo = async (req, res) => {
  const videos = await Video.find({});
  res.render('deleteVideo', { pageTitle: 'delete video', videos });
};
export const postDeleteVideo = (req, res) => {
  const { title } = req.body;
  Video.deleteOne({ title }, (err) => {
    if (err) console.log(err);
  });
  return res.redirect('/delete');
};
export const getUpload = (req, res) => {
  res.render('upload', { pageTitle: 'upload video' });
};
export const postUpload = async (req, res) => {
  const { title, description, hashTags } = req.body;
  const video = new Video({
    title,
    description,
    createdAt: Date.now(),
    hashTags: hashTags.split(',').map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  await video.save();
  res.redirect('/');
};

// export const search = (req, res) => res.render("search");
// export const share = (req, res) => res.render("share");
