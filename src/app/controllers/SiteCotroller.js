const bcrypt = require('bcrypt');
const db = require('../config');
const patient = require('../config');




class SiteController{
    index = async (req, res) => {
        const articles = await db.article.findAll({
            order: [['createdAt', 'DESC']],
            limit: 9
        })
        const stars = await db.evaluation.findAll({
            order: [['createdAt', 'DESC']],
            limit: 9,
            include: [{
                model: db.patient,
                attributes: ['name', 'img'],
                as: 'star',
                require: true
            }]
        })
        let display1 = [];
        let display2 = [];
        let display3 = [];
        let star1 = [];
        let star2 = [];
        let star3 = [];
        // for(let value of articles){
        //     display.push(value.dataValues);
        // };
        for(let i = 0; i < articles.length ; ++i){
            if(i < 3) display1.push(articles[i].dataValues);
            if(i < 6 && i >= 3) display2.push(articles[i].dataValues);
            if(i >= 6 && i < 9) display3.push(articles[i].dataValues);
        }
        for(let i = 0; i < stars.length ; ++i){
            const starData = {};
            starData.name = stars[i].dataValues.star.dataValues.name;
            starData.img = stars[i].dataValues.star.dataValues.img;
            starData.starNum = stars[i].dataValues.starNum;
            starData.evaluate = stars[i].dataValues.evaluate;
            if(i < 3) star1.push(starData);
            if(i < 6 && i >= 3) star2.push(starData);
            if(i >= 6 && i < 9) star3.push(starData);
        }
        console.log(star1);
        res.render('home', {
            display1,
            display2,
            display3,
            star1,
            star2,
            star3
        });
    }

    detail(req, res){
        res.send('search');
    }

    login = async (req, res, next) => {
        try {
            res.render('home', {
                className: 'formOpen',
            })
        } catch (error) {
            console.log(error);
        }
    }
    handleLogin = async (req, res, next) => {
        try {
            let user = null;
            let annouce = null;
            let idCltForUser = null;
            let test = {};
            let annouceForPatient = [];
            const role = req.body.role;
            if(role == 'patient'){
                user = await db.patient.findOne({
                    where: {
                        phonenum: req.body.phoneNum
                    }
                });

                // idCltForUser = await db.consultation.findAll({
                //     where: {
                //         // id_consult: 'CLT82738745',
                //         id_pat: 'PAT12588745',
                //         seen: '1'
                //     },
                //     order: [['createdAt', 'ASC']],
                //     limit: 4,
                //     include: [{
                //         model: db.doctor,
                //         attributes: ['name'],
                //         as: 'doctor',
                //         require: true
                //     }, {
                //         model: db.reply,
                //         attributes: ['id_reply'],
                //         as: 'reply',
                //         require: true
                //     }]
                // })
                // test = idCltForUser[0].dataValues;
                // test.doctor = test.doctor.dataValues.name;
                // test.id_rep = test.reply[0].dataValues.id_reply;

                idCltForUser = await db.reply.findAll({
                    where: {
                        seen: '0'
                    },
                    limit: 4,
                    order: [['createdAt', 'DESC']],
                    include: [{
                        model: db.consultation,
                        as: 'reply1',
                        require: true,
                        where: {
                            id_pat: user.id_pat,
                        },
                        include: [{
                            model: db.doctor,
                            as: 'doctor',
                            require: true,
                            // attributes: ['name, img']
                        }]
                    }]
                })
                for(let value of idCltForUser){

                    test.id_rep = value.dataValues.id_reply;
                    test.name = value.dataValues.reply1.doctor.dataValues.name;
                    test.img = value.dataValues.reply1.doctor.dataValues.img;

                    annouceForPatient.push(test);
                }
                // for(let value of idCltForUser){
                //     let a = await db.reply.findAll({
                //         attributes: ['id_reply'],
                //         where: {
                //             id_consult: value.dataValues.id_consult,
                //             seen: 0
                //         }
                //     });
                //     console.log(a);
                //     test.push(a);
                // }
            }
            if(role == 'doctor'){
                user = await db.doctor.findOne({
                    where: {
                        phonenum: req.body.phoneNum
                    }
                });

                annouce = await db.consultation.findAll({
                    where: {
                        id_doc: user.id_doc,
                        seen: '0'
                    },
                    order: [['createdAt', 'DESC']],
                    limit: 4,
                    include: [{
                        model: db.patient,
                        attributes: ['name', 'img', 'id_pat'],
                        as: 'consult',
                        require: true
                    }
                    ]
                })
            }
            if(role == 'admin'){
                user = await db.admin.findOne({
                    where: {
                        phonenum: req.body.phoneNum
                    }
                });

            }
            if(user === null){
                return res.render('home', {
                    className: 'formOpen',
                    error: 'Số điện thoại không tồn tại'
                })
            }
            user.dataValues.role = role;
            if(!bcrypt.compareSync(req.body.pass, user.pass)){
                return res.render('home', {
                    className: 'formOpen',
                    error: 'Sai mật khẩu'
                })
            }
            let display = [];
            console.log('id clt is: ', annouceForPatient);
            if(annouce != null){
                for(let value of annouce){
                    display.push(value.dataValues.consult);
                }
                req.session.consultations = annouce;
            }
            for(let i = 0; i < display.length; ++i){
                display[i].dataValues.id = annouce[i].dataValues.id_consult;
            }
            req.session.isAuthenticated = true;
            req.session.authUser = user;
            req.session.annouce = {display};
            req.session.annouceForPAtient = {annouceForPatient};
            
            res.redirect('/');
            // res.json(display);
        } catch (error) {
            console.log(error);
        }
    }

    register = (req, res, next) => {
        try {
            res.render('home', {
                className1: 'formRegisterOpen'
            })
        } catch (error) {
            res.status(400).send('error');
            console.log(error);
        }
    }

    hanleRegister = async (req, res, next) => {
        try {
            const id = 'PAT'.concat((req.body.idNum.substring(req.body.idNum.length - 4).concat(req.body.phoneNum.substring(req.body.phoneNum.length - 4))));
            const hashedPass = bcrypt.hashSync(req.body.pass, 10);
            const user = await patient.patient.create({
                name: req.body.name,
                dob: req.body.Dob,
                phonenum: req.body.phoneNum,
                pass: hashedPass,
                email: req.body.email,
                sex: req.body.sex==true?1:0,
                citizen_id: req.body.idNum,
                id_pat: id,
            });
            res.redirect('/');
        } catch (error) {
            res.status(400).send('error');
        }
    }

    logout = async (req, res, next) => {
        try {
            delete req.session.annouce;
            delete req.session.annouceForPAtient;
            req.session.isAuthenticated = false;
            req.session.authUser = null;
            res.redirect('/');
        } catch (error) {
            console.log(error);
        }
    }

    test = async (req, res, next) => {
        try {
            // const data = await db.admin.findAll();
            // for(let i = 0 ; i  <data.length; ++i){
            //     let pass = bcrypt.hashSync(data[i].pass, 10);
            //     console.log(pass);
            //     data[i].pass = pass;
            //     await data[i].save();
            // }
            // res.json(data);
            res.render('replyConsult');
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new SiteController;