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
        } catch (error) {
            res.status(400).send('error');
            console.log(error);
        }
        res.render('home');
    }
}

module.exports = new SiteController;