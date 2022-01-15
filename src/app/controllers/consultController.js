const db = require('../config');
const image = require('../apis');
class ConsultController{

    index = async (req, res, next) => {
        try {
            const services = await db.service.findAll();
            const doctors = await db.doctor.findAll();
            let display = [];
                for(let value of services){
                    display.push(value.dataValues);
            };
            let display1 = [];
                for(let value of doctors){
                    display1.push(value.dataValues);
            };

        res.render('consult', {
            display,
            display1,
            // Helpers: {
            //     loadDoctor: () => {
            //         const option = document.querySelectorAll('#clt-form .service option');
            //         const selected = option.filter((value) => value.checked == true)
            //     }
            // }
        });
        } catch (error) {
            console.log(error);
        }
    }

    detail(req, res){
        res.render('news');
    }
    sent = (req, res) => {
        image.name = req.file.filename;
        image.print();
        image.uploadFile();
        res.send(req.body);
    }

}

module.exports = new ConsultController;