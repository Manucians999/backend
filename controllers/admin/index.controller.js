const User = require("../../models/")

const indexAdminPage = async (req, res) => {
  res.render("admin/index", {
    title: "This is admin pages",
  });
};

const getAllUser = async(req, res)=>{
  
}

module.exports = { indexAdminPage };
