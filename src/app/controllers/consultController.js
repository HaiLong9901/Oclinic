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
            const body = req.body;
            if(req.file != null){
                image.name = req.file.filename;
                image.print();
                await image.uploadFile();
                body.idImg = await image.id;
            }
            else body.idImg = '';
            body.id_consult = id;
            body.id_service = req.body.service;
            body.id_pat = req.session.authUser.id_pat;
            const consultation = await db.consultation.create({
                id_consult: body.id_consult,
                id_doc: body.id_doc,
                id_pat: body.id_pat,
                _sensitive: body.sensitive,
                sympton: body.sympton,
                img: body.idImg,
                service: body.id_service
            })
            console.log(body);
            res.send(req.body);
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new ConsultController;