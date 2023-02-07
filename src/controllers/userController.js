const user = {
	name: "dim",
	login: false,
};

export const login = (req, res) => res.render("login", { pageTitle: "login", user: user });
export const logout = (req, res) => res.render("logout", { pageTitle: "logout", user: user });
export const join = (req, res) => res.render("join", {pageTitle: "join", user: user});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "editProfile"});
// export const deleteProfile = (req, res) => res.render("deleteProfile");
// export const detail = (req, res) => res.render("detail");
// export const changePassword = (req, res) => res.render("changePassword");
