const { department } = require('../config');
const db = require('../config');

module.exports = (sequelize, Sequelize) => {
    const department = sequelize.define('department',{
        id_dep: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            notNULL: true
        },
        id_head: {
            type: Sequelize.STRING,
            notNULL: true,
            references: {
                model: db.doctor, // 'Movies' would also work
                key: 'id_head'
              }
        },
        departmentIdDep: false
    }, {
        tableName: 'department',
        timestamp: false,
        createdAt: false,
        updatedAt: false
    });

    
    return department;
}