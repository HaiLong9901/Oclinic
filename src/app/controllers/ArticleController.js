const db = require('../config');

class ArticleController{

    index = async (req, res, next) => {
        try {
            const articles = await db.article.findAll();
            let display = [];
            for(let value of articles){
                display.push(value.dataValues);
            };
            res.render('article', {display});
        } catch (error) {
            console.log(error);
        }
    }

    detail(req, res){
        res.render('news');
    }

}

module.exports = new ArticleController;