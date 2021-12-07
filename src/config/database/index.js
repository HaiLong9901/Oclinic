const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('longdh', 'root', null, {
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

module.exports = {sequelize, connect};