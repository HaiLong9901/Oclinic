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
            const role = req.session.authUser.role;
            if(role == 'patient'){
                return res.render('updateInfor', {
                    patient: true,
                })
            }
            if(role == 'doctor'){
                return res.render('updateInfor', {
                    doctor: true,
                })
            }
            if(role == 'admin'){

                return res.render('updateInfor', {
                    admin: true,
                });
            }
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
            res.render('sent', {
                quote: 'Cập nhật thông tin thành công',
                thanks: 'Vui lòng đăng nhập lại để kiểm tra thông tin cập nhật'
            })
        } catch (error) {
            console.log(error)
        }
    }

    addAcc = async (req, res, next) => {
        try {
            const selectDepartment = await db.department.findAll();
            const department = [];
            for(let value of selectDepartment){
                department.push(value.dataValues);
            }
            res.render('addAcc', {department});
        } catch (error) {
            console.log(error);
        }
    }
    addAccToDb = async (req, res, next) => {
        try {
            const getId = req.body.phonenum
            const id_doc = 'DOC'.concat(getId.substring(getId.length - 8));
            const doctor = await db.doctor.create({
                id_doc: id_doc,
                name: req.body.name,
                dob: req.body.dob,
                sex: req.body.sex==true?1:0,
                phonenum: req.body.phonenum,
                degree: req.body.degree,
                postition: req.body.postition,
                id_dep: req.body.department,
                pass: bcrypt.hashSync(req.body.phonenum, 10),
                email: req.body.email,
                img: (req.file)?req.file.filename:null,
                description: req.body.description
            });
            console
            res.render('sent',{
                quote: 'Thêm bác sĩ thành công',
            })
        } catch (error) {
            console.log(error);
        }
    }

    deleteAcc = async (req, res, next) =>{
        try {
            const role = req.session.authUser.role;
            if(role == 'patient'){
                const user = await db.patient.destroy({
                    where: {
                        id_pat: req.session.authUser.id_pat
                    }
                });
                return res.render({
                    quote: 'Cập nhật thông tin thành công',
                    thanks: 'Vui lòng đăng nhập lại để kiểm tra thông tin cập nhật'
                })
            }
            if(role == 'doctor'){
                const user = await db.doctor.destroy({
                    where: {
                        id_doc: req.session.authUser.id_doc
                    }
                });
                return res.render({
                    quote: 'Cập nhật thông tin thành công',
                    thanks: 'Vui lòng đăng nhập lại để kiểm tra thông tin cập nhật'
                })
            }
            if(role == 'admin'){

                const user = await db.patient.destroy({
                    where: {
                        id_ad: req.session.authUser.id_ad
                    }
                });
                return res.render({
                    quote: 'Cập nhật thông tin thành công',
                    thanks: 'Vui lòng đăng nhập lại để kiểm tra thông tin cập nhật'
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = new SettingController;