const db = require('../config');
const bcrypt = require('bcrypt');
const image = require('../apis');


class SettingController {

    index = async (req, res, next) => {
        try {
            const role = req.session.authUser.role;
            if(role == 'patient'){
                return res.render('profile', {
                    patient: true,

                    helpers: {
                        sexDisplay: (sex) => {
                            if(sex == true) return 'Nam';
                            return 'Nữ';
                        }
                    }
                })
            }
            if(role == 'doctor'){
                return res.render('profile', {
                    doctor: true,
                    helpers: {
                        sexDisplay: (sex) => {
                            if(sex == true) return 'Nam';
                            return 'Nữ';
                        },
                        convertToVNese: (degree) => {
                            if(degree == 'doctor') return 'Bác sĩ';
                            if(degree == 'masters') return 'Thạc sĩ';
                            return 'Giáo sư';
                        }
                    }
                })
            }
            if(role == 'admin'){

                return res.render('profile', {
                    admin: true,
                    helpers: {
                        sexDisplay: (sex) => {
                            if(sex == true) return 'Nam';
                            return 'Nữ';
                        }
                    }
                });
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    update = async (req, res, next) => {
        try {
            res.render('updateInfor')
        } catch (error) {
            console.log(error);
        }
    }

    evaluation = async (req, res, next) => {
        try {
            res.render('evaluation');
        } catch (error) {
            console.log(error);
        }
    }
    result = async (req, res, next) => {
        try {
            const id = req.session.authUser.id_pat;
            let body = {};
            body.id = id;
            body.star = req.body.star;
            body.eval = req.body.evaluation;
            const data = await db.evaluation.create({
                id_pat: body.id,
                starNum: body.star,
                evaluate: body.eval
            })
            res.render('sent', {
                quote: 'Đánh giá thành công',
                thanks: 'Cảm ơn bạn đã đánh giá dịch vụ của chúng tôi'
            })
        } catch (error) {
            console.log(error);
        }
    }

    resultInfor = async (req, res, next) => {
        try {
            const data = req.body;
            console.log(req.file);
            if(req.file != null){
                // image.name = req.file.filename;
                // image.print();
                // await image.uploadFile();
                data.img = req.file.filename;
            }
            else data.img = null;
            console.log(req.session.authUser);
            let user;
            if(req.session.authUser.role == 'patient'){
                console.log('day la user');
                user = await db.patient.findOne({
                    where: {
                        id_pat: req.session.authUser.id_pat
                    }
                })
                console.log(user);
                if(req.body.name.length){
                    user.name = req.body.name;
                }
                if(req.body.phonenum.length){
                    user.phonenum = req.body.name;
                }
                if(req.body.email.length){
                    user.email = req.body.name;
                }
                if(req.body.pass.length){
                    user.pass = bcrypt.hashSync(req.body.pass, 10);
                }
                if(data.img){
                    user.img = data.img;
                }
                await user.save();
            }
            res.json(data);
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new SettingController;