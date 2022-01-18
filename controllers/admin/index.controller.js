const User = require("../../models/user.model");

const indexAdminPage = async (req, res) => {
  res.render("admin/index", {
    title: "This is admin pages",
  });
};

const getAllUser = async (req, res) => {
  const users = await User.find();
  res.render("admin/user/index", {
    users,
    title: "This is user page",
  });
};

const updateRoleUser = async (req, res) => {
  res.redirect("/admin/users");
};

const deleteUser = async (req, res) => {
  await User.deleteOne({ _id: req.params.id });
  res.redirect("/admin/users");
};

module.exports = { indexAdminPage, getAllUser, updateRoleUser, deleteUser };
