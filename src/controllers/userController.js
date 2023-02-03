export const login = (req, res) => res.render("login");
export const join = (req, res) => res.render("join");
export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "editProfile"});
export const deleteProfile = (req, res) => res.render("deleteProfile");
export const detail = (req, res) => res.render("detail");
export const changePassword = (req, res) => res.render("changePassword");
