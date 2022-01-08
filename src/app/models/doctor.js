const db = require('../config');
module.exports = (sequelize, Sequelize) => {
    const doctor = sequelize.define('doctor',{
        id_doc: {
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
        sex: {
            type: Sequelize.BOOLEAN,
        },
        phonenum: {
            type: Sequelize.STRING,
            notNULL: true
        },
        degree: {
            type: Sequelize.STRING,
            notNULL: true
        },
        postition: {
            type: Sequelize.STRING,
            notNULL: true
        },
        description: {
            type: Sequelize.TEXT,
            notNULL: true
        },
        id_dep: {
            type: Sequelize.STRING,
            notNULL: true,
            references:{
                model: db.department,
                key: 'id_doc'
            }
        },
        img: {
            type: Sequelize.STRING
        },
        pass: {
            type: Sequelize.STRING,
            notNULL: true
        },
        email: {
            type: Sequelize.STRING,
        }
    }, {
        tableName: 'doctor',
        timestamp: false,
        createdAt: false,
        updatedAt: false
    });

    // doctor.belongsTo(db.department);
    
    return doctor;
}