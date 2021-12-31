
const student = require('../config');

class ConsultController{

    index =  (req, res) => {
        res.render('consult');
    }

    detail(req, res){
        res.render('news');
    }

}

module.exports = new ConsultController;