class SiteController{

    index(req, res){
        res.render('home');
    }

    detail(req, res){
        res.send('search');
    }

    store = (req, res, next) => {
        res.json(req.body);
    }
}

module.exports = new SiteController;