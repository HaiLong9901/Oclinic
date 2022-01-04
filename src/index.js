
const express = require('express');
const morgan = require('morgan');
const engine = require('express-handlebars');
const path = require('path');
const multer = require('multer');
const app = express();
const port = 3000;
const db = require('./app/config');

const route = require('./routes');
const googleAPIS = require('./app/apis');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './app/public/img');
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     cb(null, Date.now + path.extname(file.originalname));
//   }
// });
// const upload = multer({
//   storage: storage,
// })




app.use(express.urlencoded({extended: true}));// sử dụng middleware để sử dụng req.body
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.engine('handlebars', engine.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource','views'));
db.connect();
route(app);

console.log('path', path.join(__dirname, 'resource/views'));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})