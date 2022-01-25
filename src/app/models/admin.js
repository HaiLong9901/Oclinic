const db = require('../config');
module.exports = (sequelize, Sequelize) => {
    const admin = sequelize.define('admin',{
        id_ad: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            notNULL: true
        },
        dob: {
            type: Sequelize.DATE,
            notNULL: true
        },
        email: {
            type: Sequelize.STRING,
        },
        phonenum: {
            type: Sequelize.STRING,
            notNULL: true
        },
        img: {
            type: Sequelize.STRING
        },
        sex: {
            type: Sequelize.BOOLEAN,
        },
        pass: {
            type: Sequelize.STRING,
            notNULL: true
        }

    }, {
        tableName: 'admin',
        timestamp: false,
        createdAt: false,
        updatedAt: false
    });

    // doctor.belongsTo(db.department);
    
    return admin;
}