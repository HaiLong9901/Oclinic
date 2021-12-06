const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('learndb', 'root', 'toiyeutoan9901', {
    host: 'localhost',
    dialect: 'mysql'
});

async function connect(){
    try{
        await sequelize.authenticate();
        console.log('connect successfully');
    }catch(e){
        console.error(e);
    }
}

module.exports = { connect };