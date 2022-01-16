const indexAdminPage = async (req, res) => {
  res.render("admin/index", {
    title: "This is admin pages",
  });
};

module.exports = { indexAdminPage };
