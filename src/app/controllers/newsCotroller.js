const student = require('../models/news');

class NewsController{

    index(req, res){
        res.send(student);
    }

    detail(req, res){
        res.send('news detail');
    }
}

module.exports = new NewsController;