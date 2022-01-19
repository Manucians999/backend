const User = require("../../models/user.model");

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

const updateRoleUser = async (req, res) => {};

module.exports = { getAllUser, updateRoleUser };
