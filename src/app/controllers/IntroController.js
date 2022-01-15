const db = require('../config');

class IntroController{

    index = async (req, res) =>{
        try {
            const services = await db.service.findAll();
            let display = [];
            for(let value of services){
                display.push(value.dataValues);
            };
            const  ser = await db.service.findAll({
                include: [{
                    model: db.department,
                    attributes: ['name'],
                    as: 'department',
                    require: true
                }]
            });
            console.log(ser);
            res.json(ser);
            // res.render('intro', {
            //     display,
            //     helpers: {
            //         addIndex: (index) => ++index,
            //         styleIndex: (index) => {
            //             if(index%2 == 0 ) return 'table-light';
            //             return 'table-info';
            //         }
            //       }
            // });
        } catch (error) {
            console.log(error);
        }
    }

    detail(req, res){
        res.send('news detail');
    }
}

module.exports = new IntroController;