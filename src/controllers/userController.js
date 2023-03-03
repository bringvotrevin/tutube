import User from '../models/User';

export const getLogin = (req, res) => {
  res.render('login', { pageTitle: 'login' });
};
export const postLogin = async (req, res) => {
  const { userName, password } = req.body;
  const userNameExists = await User.exists({ userName });
  const passwordExists = await User.exists({ password });
  if (userNameExists && passwordExists) {
    res.redirect('/');
  }
  res.redirect('/upload');
};
export const logout = (req, res) => res.render('logout', { pageTitle: 'logout' });
export const getJoin = (req, res) => {
  res.render('join', { pageTitle: 'join' });
};
export const postJoin = async (req, res) => {
  const { userName, email, password, name, location } = req.body;
  const user = new User({
    userName, email, password, name, location,
  });
  await user.save();
  return res.redirect('login');
};
export const editProfile = (req, res) => res.render('editProfile', { pageTitle: 'editProfile' });
export const deleteProfile = (req, res) => res.render('deleteProfile', { pageTitle: 'deleteProfile' });
// export const detail = (req, res) => res.render("detail");
// export const changePassword = (req, res) => res.render("changePassword");
