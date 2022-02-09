const Sequelize = require('sequelize');
// const sequelize = new Sequelize('longdh', 'root', 'toiyeutoan9901', {
//     host: '127.0.0.1',
//     dialect: 'mysql',
//     port: 3306
// });
const sequelize = new Sequelize('oclinic', 'Longdh', 'hailong9901', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307
});

async function connect(){
    try{
        await sequelize.authenticate();
        console.log('connect successfully');
    }catch(e){
        console.error(e);
    }
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.news = require('../models/news')(sequelize, Sequelize);
db.user = require('../models/user')(sequelize, Sequelize);
db.doctor = require('../models/doctor')(sequelize, Sequelize);
db.patient = require('../models/patient')(sequelize, Sequelize);
db.admin = require('../models/admin')(sequelize, Sequelize);
db.department = require('../models/department')(sequelize, Sequelize);
db.article = require('../models/article')(sequelize, Sequelize);
db.service = require('../models/services')(sequelize, Sequelize);
db.consultation = require('../models/consultation')(sequelize, Sequelize);
db.evaluation = require('../models/evaluation')(sequelize, Sequelize);
db.reply = require('../models/reply')(sequelize, Sequelize);
db.connect = connect;

db.doctor.belongsTo(db.department, {
    foreignKey: 'id_dep',
    as: 'department'
})
db.service.belongsTo(db.department, {
    foreignKey: 'id_dep',
    as: 'department'
})
db.consultation.belongsTo(db.patient, {
    foreignKey: 'id_pat',
    as: 'consult'
})
// db.doctor.hasOne(db.department, {
//     foreignKey: 'id_dep',
//     as: 'department'
// })
// db.department.hasMany(db.doctor, {
//     foreignKey: 'id_doc',
//     as: 'role2'
// })
module.exports = db;