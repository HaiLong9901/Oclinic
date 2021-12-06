class NewsController{

    index(req, res){
        res.send('news');
    }

    detail(req, res){
        res.send('news detail');
    }
}

module.exports = new NewsController;