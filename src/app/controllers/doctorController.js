const db = require('../config');
// const doctor = require('../config');

class DoctorController{
    
    index = async (req, res) => {
        try{
            let doctors = await db.doctor.findAll();
            let display = [];
            for(let value of doctors){
                display.push(value.dataValues);
            }
            res.render('doctor', {display});
        }catch(error){
            console.log(error);
        }
    }

    getDoctorOfDepartment = async (req, res , next) => {
        try{
            let doctors = await db.doctor.findAll({
                where:{
                    id_dep: req.params.id_dep,
                }
            });
            let display = [];
            for(let value of doctors){
                display.push(value.dataValues);
            };
            res.render('doctor', {display});
        }catch(error){
            console.log(error);
        }
    }

    showProfile = async (req, res, next) => {
        try {
            let seeDoctor = await db.doctor.findAll({
                where: {
                    id_doc: req.params.id_doc
                },
                include: [{
                    model: db.department,
                    attributes: ['name'],
                    as: 'department',
                    require: true
                }]
            });
            let display = seeDoctor[0].dataValues;
            display.department = display.department.name;
            res.render('doctorDetail', {
                display,
                helpers: {
                    convertToVNese: (degree) => {
                        if(degree == 'doctor') return 'Bác sĩ';
                        if(degree == 'masters') return 'Thạc sĩ';
                        return 'Giáo sư';
                    }
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new DoctorController;