const path = require('path');
const multer = require('multer');
const image = require('../apis');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../../public/img'));
    },
    filename: (req, file, cb) => {
      console.log(file);
      image.name = Date.now() + file.originalname;
      cb(null, Date.now() + file.originalname);
    }
  });
const upload = multer({
    storage: storage,
  });

module.exports = upload;