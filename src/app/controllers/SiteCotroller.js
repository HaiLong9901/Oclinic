const bcrypt = require('bcrypt');
const db = require('../config');
const patient = require('../config');




class SiteController{
    index = async (req, res) => {
        const articles = await db.article.findAll({
            order: [['createdAt', 'DESC']],
            limit: 3
        })
        let display = [];
        for(let value of articles){
            display.push(value.dataValues);
        };
        
        res.render('home', {display});
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
            const role = req.body.role;
            if(role == 'patient'){
                user = await db.patient.findOne({
                    where: {
                        phonenum: req.body.phoneNum
                    }
                });
            }
            if(role == 'doctor'){
                user = await db.doctor.findOne({
                    where: {
                        phonenum: req.body.phoneNum
                    }
                });
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
            user.role = role;
            if(req.body.pass !== user.pass){
                return res.render('home', {
                    className: 'formOpen',
                    error: 'Sai mật khẩu'
                })
            }
            console.log(user);
            req.session.isAuthenticated = true;
            req.session.authUser = user;
            res.redirect('/');
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
            const user = await patient.patient.create({
                name: req.body.name,
                dob: req.body.Dob,
                phonenum: req.body.phoneNum,
                pass: req.body.pass,
                email: req.body.email,
                sex: req.body.sex==true?1:0,
                citizen_id: req.body.idNum,
                id_pat: id,
            });
            const hashPass = bcrypt.hashSync(req.body.pass, 8);
            console.log('hashpass:  ', hashPass);
            res.redirect('/');
        } catch (error) {
            res.status(400).send('error');
        }
    }

    profile = (req, res, next) => {
        try {
            res.render('profile');
        } catch (error) {
            console.log(error);
        }
    }

    logout = async (req, res, next) => {
        try {
            req.session.isAuthenticated = false;
            req.session.authUser = null;
            res.redirect('/');
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new SiteController;