require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const homeRouter = require("./routes/home.route");
const productRouter = require("./routes/product.route");
const adminRouter = require("./routes/admin/index.route");
const authRouter = require("./routes/auth.route");
const sizeRouter = require("./routes/admin/size.route");
const producerRouter = require("./routes/admin/producer.route");
const productsRouter = require("./routes/admin/product.route");
const colorRouter = require("./routes/admin/color.route");
const middleware = require("./middlewares/auths.middleware");

const app = express();

const PORT = process.env.PORT | 3000;

app.use(cookieParser("Cookie"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose
  .connect(process.env.MONGO_CONNECT_URL, options)
  .then(() => {
    console.log("Server connect successful");
  })
  .catch((err) => {
    console.log("Error", err);
  });

// app.use("/", homeRouter);
// app.use("/products", productRouter);
// app.use("/auth", authRouter);
// app.use("/admin", middleware.authLogin, adminRouter);
app.use("/admin", adminRouter);
app.use("/admin/sizes", sizeRouter);
app.use("/admin/colors", colorRouter);
app.use("/admin/producers", producerRouter);
app.use("/admin/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
