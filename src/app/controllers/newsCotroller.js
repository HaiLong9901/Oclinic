
const student = require('../config');

class NewsController{

    index = async (req, res) => {
        try{
            let user = await student.news.findAll();
            let user2 = user[0].dataValues;
            console.log('--------------------');
            console.log(user2);
            console.log('--------------------');
            // let data = user.dataValues;
            res.render('news');
        }catch(e){
            console.log(e);
        }
    }

    detail(req, res){
        res.send('news detail');
    }
}

module.exports = new NewsController;