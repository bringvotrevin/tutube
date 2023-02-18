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
export const deleteVideo = (req, res) => res.render('deleteVideo', { pageTitle: 'delete video' });
export const getUpload = (req, res) => {
  res.render('upload', { pageTitle: 'upload video' });
};
export const postUpload = async (req, res) => {
  const { title, description, hashTags } = req.params;
  const video = new Video({
    title,
    description,
    hashTags,
    createdAt: new Date(),
    views: 0,
    rating: 0,
  });
  await video.save;
  res.redirect('/');
};

// export const search = (req, res) => res.render("search");
// export const share = (req, res) => res.render("share");
