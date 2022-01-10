const db = require('../config');
const doctor = require('../config');

class DoctorController{
    
    index = async (req, res) => {
        try{
            let doctors = await doctor.doctor.findAll();
            let display = [];
            for(let value of doctors){
                display.push(value.dataValues);
            }
            res.render('doctor', {display});
        }catch(error){
            console.log(error);
        }
    }

    surgery = async (req, res) => {
        try{
            let doctors = await doctor.doctor.findAll({
                where:{
                    id_dep:'DEP1'
                }
            });
            let display = [];
            for(let value of doctors){
                display.push(value.dataValues);
            };
            console.log({display});
            res.render('surgery', {display});
        }catch(error){
            console.log(error);
        }
    }

    showProfile = async (req, res, next) => {
        try {
            let seeDoctor = await doctor.doctor.findAll({
                where: {
                    id_doc: req.params.id_doc
                },
                // include: [{
                //     model: db.department,
                //     require: true
                // }]
            });
            // res.json(seeDoctor);
            let display = seeDoctor[0].dataValues;
            console.log(display);
            res.render('doctorDetail', {display});
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new DoctorController;