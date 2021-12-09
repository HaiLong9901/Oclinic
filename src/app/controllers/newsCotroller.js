
const student = require('../config');

class NewsController{

    index = async (req, res) => {
        try{
            let data = await student.news.findAll();
            console.log('--------------------');
            console.log(data);
            console.log('--------------------');
            res.render('news', {data});
            // res.send(typeof(data))
        }catch(e){
            console.log(e);
        }
    }

    detail(req, res){
        res.send('news detail');
    }
}

module.exports = new NewsController;