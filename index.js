const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const homeRouter = require('./routes/home.route');
const productRouter = require('./routes/product.route');
const adminRouter = require('./routes/admin.route');
const authRouter = require('./routes/auth.route');
const middleware = require('./middlewares/auths.middleware');

const app = express();

app.use(cookieParser('Hi I am hung'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload())

const url = 'mongodb+srv://hungnucha123:hung0989231338@cluster0.fm2md.mongodb.net/backend?retryWrites=true&w=majority';
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
mongoose
  .connect(url, options)
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.log(err, 'error');
  });

app.use('/', homeRouter);
app.use('/products', productRouter);
app.use('/admin', middleware.authLogin, adminRouter);
app.use('/auth', authRouter);

app.listen(7002, () => {
  console.log('listening on port 7002');
});
