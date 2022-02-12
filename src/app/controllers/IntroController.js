const db = require('../config');

class IntroController{

    index = async (req, res) =>{
        try {
            const  services = await db.service.findAll({
                include: [{
                    model: db.department,
                    attributes: ['name'],
                    as: 'department',
                    require: true
                }]
            });
            let display = [];
            for(let value of services){
                let data = value.dataValues;
                data.department = value.dataValues.department.name;
                display.push(data);
            };
            console.log(display);
            // res.json(ser);
            res.render('intro', {
                display,
                helpers: {
                    addIndex: (index) => ++index,
                    styleIndex: (index) => {
                        if(index%2 == 0 ) return 'table-light';
                        return 'table-info';
                    }
                  }
            });
        } catch (error) {
            console.log(error);
        }
    }

    detail(req, res){
        res.send('news detail');
    }
}

module.exports = new IntroController;