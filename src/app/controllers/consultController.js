const db = require('../config');
const image = require('../apis');
class ConsultController{

    index = async (req, res, next) => {
        try {
            const services = await db.service.findAll();
            const doctors = await db.doctor.findAll();
            let display = [];
                for(let value of services){
                    display.push(value.dataValues);
            };
            let display1 = [];
                for(let value of doctors){
                    display1.push(value.dataValues);
            };

        res.render('consult', {
            display,
            display1,
        });
        } catch (error) {
            console.log(error);
        }
    }

    detail(req, res){
        res.render('news');
    }
    sent = async (req, res, next) => {
        try {
            const now = Date.now().toString();
            const user = req.session.authUser.id_pat;
            console.log(user);
            const id = 'CLT'.concat(now.substring(now.length - 4).concat(user.substring(user.length - 4)));
            console.log('date is' , id);
            // const consultation = await db.consultation.create()
            // if(req.file == null) return res.send(req.body);
            // image.name = req.file.filename;
            // image.print();
            // image.uploadFile();
            res.send(req.body);
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new ConsultController;