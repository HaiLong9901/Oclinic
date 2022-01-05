const patient = require('../config');




class SiteController{

    index(req, res){
        res.render('home');
    }

    detail(req, res){
        res.send('search');
    }

    store = async (req, res, next) => {
        try {
            // const user = await patient.patient.create({
            //     name: req.name,
            //     dob: req.Dob,
            //     phonenum: req.phoneNum,
            //     pass: req.pass,
            //     email: req.email,
            //     sex: req.sex,
            //     id_pat: 'PAT11334455'
            //     // citizen_id: req.idNum
            // });
            const user = await patient.patient.findAll();
            console.log(user);
        } catch (error) {
            console.log(error);
        }
        res.send(req.body);
    }
}

module.exports = new SiteController;