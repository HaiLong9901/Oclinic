
class ArticleController{

    index = async (req, res) => {
        res.render('article');
    }

    detail(req, res){
        res.render('news');
    }

}

module.exports = new ArticleController;