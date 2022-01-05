
const student = require('../config');
const multer = require('../multer');
const image = require('../apis');
class ConsultController{

    index =  (req, res) => {
        res.render('consult');
    }

    detail(req, res){
        res.render('news');
    }
    sent = (req, res) => {
        image.name = req.file.filename;
        image.print();
        image.uploadFile();
        res.send(req.body);
    }

}

module.exports = new ConsultController;