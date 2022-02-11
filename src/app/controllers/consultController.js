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

    detail = async(req, res, next) => {
        try {
            const data = await db.consultation.findOne({
                where: {
                    id_consult: req.params.id_clt,
                },
                include: [{
                    model: db.patient,
                    attributes: ['name'],
                    as: 'consult',
                    require: true
                }]
            })
            req.session.id_clt = req.params.id_clt;
            data.dataValues.namePatient = data.consult.name;
            const load = data.dataValues;
            // res.json(data);
            console.log(data);
            res.render('replyConsult', {load, doctor: true});
        } catch (error) {
            console.log(error);
        }
    }

    detailReply = async (req, res, next) =>{
        try {
            const data = await db.reply.findOne({
                where: {
                    id_reply: req.params.id_reply,
                },
                include: [{
                    model: db.consultation,
                    as: 'reply1',
                    require: true
                }]
            })
            data.dataValues._sensitive = data.reply1._sensitive;
            data.dataValues.img = data.reply1.img;
            data.dataValues.sympton = data.reply1.sympton;
            const load = data.dataValues;
            // req.session.id_clt = req.params.id_clt;
            // data.dataValues.namePatient = data.consult.name;
            // const load = data.dataValues;
            // // res.json(data);
            // console.log(data);
            // res.render('replyConsult', {load});
            // res.send(req.params.id_reply);
            res.render('replyConsult', {load, patient: true});
        } catch (error) {
            console.log(error);
        }
    }

    sent = async (req, res, next) => {
        try {
            const now = Date.now().toString();
            const user = req.session.authUser.id_pat;
            const id = 'CLT'.concat(now.substring(now.length - 4).concat(user.substring(user.length - 4)));
            const body = req.body;
            if(req.file != null){
                // image.name = req.file.filename;
                // image.print();
                // await image.uploadFile();
                // body.idImg = await image.id;
                body.img = req.file.filename;
            }
            else body.img = null;
            body.id_consult = id;
            body.id_service = req.body.service;
            body.id_pat = req.session.authUser.id_pat;
            const consultation = await db.consultation.create({
                id_consult: body.id_consult, 
                id_doc: body.doctor,
                id_pat: body.id_pat,
                _sensitive: body.sensitive,
                sympton: body.sympton,
                img: body.img,
                service: body.id_service
            })
            res.render('sent', {
                quote: 'Gửi yêu cầu tư vấn thành công',
                thanks: 'Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi',
                consult: true

            });

        } catch (error) {
            console.log(error);
        }
    }

    reply = async (req, res, next) => {
        try {
            const data = {};
            const now = Date.now().toString();
            const user = req.session.authUser.id_doc;
            const id_rep = 'REP'.concat(now.substring(now.length - 4).concat(user.substring(user.length - 4)));
            console.log(id_rep);
            data.id_clt = req.session.id_clt;
            data.id_rep = id_rep;
            const reply = db.reply.create({
                id_reply: data.id_rep,
                id_consult: data.id_clt,
                content: req.body.reply
            })
            const consult = await db.consultation.findOne({
                where:{
                    id_consult: req.session.id_clt
                }
            })
            consult.seen = 1;
            await consult.save();
            delete req.session.id_clt;
            res.render('sent', {
                quote: 'Gửi yêu kết quả tư vấn thành công'
            })
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new ConsultController;