const user = {
	name: "dim",
	login: false,
};

export const trending = (req, res) => res.render("home", {pageTitle: "home", user: user});
// export const watch = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit", {pageTitle: "edit", user: user});
// export const search = (req, res) => res.render("search");
// export const deleteVideo = (req, res) => res.render("deleteVideo");
// export const share = (req, res) => res.render("share");
// export const upload = (req, res) => res.render("upload");