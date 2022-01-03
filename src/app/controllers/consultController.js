
const student = require('../config');
const multer = require('../multer');
class ConsultController{

    index =  (req, res) => {
        res.render('consult');
    }

    detail(req, res){
        res.render('news');
    }
    sent = (req, res) => {
        res.render('sent');
    }

}

module.exports = new ConsultController;