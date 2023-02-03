export const trending = (req, res) => res.render("home", {pageTitle: "trending videos"});
export const watch = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.render("search");
export const deleteVideo = (req, res) => res.render("delete video");
export const share = (req, res) => res.render("share");
export const upload = (req, res) => res.render("upload");