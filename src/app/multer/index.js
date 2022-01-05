const path = require('path');
const multer = require('multer');
const image = {};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../../public/img'));
    },
    filename: (req, file, cb) => {
      console.log(file);
      const timeNow = Date.now()
      cb(null, timeNow + file.originalname);
      image.name = timeNow + file.originalname;
      console.log('name is', image.name);
    }
  });
const upload = multer({
    storage: storage,
  });
console.log('sad',image.name);
module.exports = {upload, image};