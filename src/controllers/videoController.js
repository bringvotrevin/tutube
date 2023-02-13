const user = {
	name: "dim",
	login: false,
};

let videos = [
	{
		title: "the first video",
		id: 1,
		rate: 1,
		views: 100,
		comments: 100,
		createdAt: "1 min ago",
	},
	{
		title: "the second video",
		id: 2,
		rate: 2,
		views: 200,
		comments: 200,
		createdAt: "2 min ago",
	}
]

const initVideo = (obj, title, id) => {
	obj.title = title;
	obj.id =  id;
	obj.rate = 0;
	obj.views = 0;
	obj.comments = 0;
	obj.createdAt = "0 min ago";
};

export const trending = (req, res) => res.render("home", {pageTitle: "home", user, videos});
export const watch = (req, res) => {
	const index = req.params.id - 1;
	const video = videos[index];
	res.render("watch", {pageTitle: "watch", user, video});
}
export const editVideo = (req, res) => {
	const index = req.params.id - 1;
	const video = videos[index];
	res.render("editVideo", {pageTitle: "edit video", user, video});
}
export const postVideo = (req, res) => {
	const index = req.params.id - 1;
	const { title } = req.body;
	videos[index].title = title;
	res.redirect(`/video/${req.params.id}`);
};
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "delete video", user});
export const getUpload = (req, res) => {
	res.render("upload", {pageTitle: "upload video", user});
}
export const postUpload = (req, res) => {
	const { title } = req.body;
	const newVideo = new Object;
	initVideo(newVideo, title, videos.length);
	videos.push(newVideo);
	res.redirect('/');
}

// export const search = (req, res) => res.render("search");
// export const share = (req, res) => res.render("share");