
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
        },
    }, {
        tableName: 'department',
        timestamp: false,
        createdAt: false,
        updatedAt: false
    });

    
    return department;
}