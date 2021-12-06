class SiteController{

    index(req, res){
        res.render('home');
    }

    detail(req, res){
        res.send('search');
    }
}

module.exports = new SiteController;