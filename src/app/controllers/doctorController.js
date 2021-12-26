const doctor = require('../config');

class DoctorController{
    
    index = async (req, res) => {
        try{
            let doctors = await doctor.doctor.findAll();
            let display = [];
            for(let value of doctors){
                display.push(value.dataValues);
            }
            // console.log('----------------');
            // console.log({display});
            // console.log('----------------');
            // res.json({display});
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
            // res.json(display);
        }catch(error){
            console.log(error);
        }
    }
}

module.exports = new DoctorController;