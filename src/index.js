
const express = require('express');
const morgan = require('morgan');
const engine = require('express-handlebars');
const path = require('path');
const multer = require('multer');
const app = express();
const port = 3000;
const db = require('./app/config');
const session = require('express-session');

const route = require('./routes');



app.use(express.urlencoded({extended: true}));// sử dụng middleware để sử dụng req.body
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.set('trust proxy', 1);
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 360000
  }
}))

app.engine('handlebars', engine.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource','views'));
db.connect();
route(app);

console.log('path', path.join(__dirname, 'resource/views'));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})