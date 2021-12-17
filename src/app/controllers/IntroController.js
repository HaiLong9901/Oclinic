class IntroController{

    index(req, res){
        res.render('intro');
    }

    detail(req, res){
        res.send('news detail');
    }
}

module.exports = new IntroController;