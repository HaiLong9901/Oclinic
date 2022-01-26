const db = require('../config');
const bcrypt = require('bcrypt');


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
}
module.exports = new SettingController;