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
db.connect = connect;
module.exports = db;