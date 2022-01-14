const db = require('../config');

class IntroController{

    index = async (req, res) =>{
        try {
            const services = await db.service.findAll();
            let display = [];
            for(let value of services){
                display.push(value.dataValues);
            };
            res.render('intro', {display});
        } catch (error) {
            console.log(error);
        }
    }

    detail(req, res){
        res.send('news detail');
    }
}

module.exports = new IntroController;