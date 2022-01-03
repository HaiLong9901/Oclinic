const path = require('path');
const multer = require('multer');

console.log(path.join(__dirname, 'img'));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'D:\\Oclinic_project\\src\\public\\img');
    },
    filename: (req, file, cb) => {
      console.log(file);
      cb(null, Date.now() + file.originalname);
    }
  });
const upload = multer({
    storage: storage,
  })

module.exports = upload;