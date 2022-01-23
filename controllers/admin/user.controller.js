const User = require("../../models/user.model");
const Role = require("../../models/role.model")

const getAllUser = async (req, res) => {
  const users = await User.find().populate({
    path: "role",
    select: "_id name slug",
  });
  res.render("admin/user/index", {
    users,
    title: "This is user page",
  });
};

const updateRoleUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).populate({
    path: "role",
    select: "_id name slug",
  });
  const userRole = user.role.slug === "admin" ?  "user": "admin";
  const role = await Role.findOne({ slug: userRole })
  await User.updateOne({ _id: req.params.id }, {role: role._id});
  res.redirect("/admin/users")
};

const deleteUser = async (req, res) => {
  await User.deleteOne({ _id: req.params.id });
  res.redirect("/admin/users");
};

module.exports = { getAllUser, updateRoleUser, deleteUser };
