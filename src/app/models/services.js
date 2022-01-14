

module.exports = (sequelize, Sequelize) => {
    const service =  sequelize.define('service',{
        id_service: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        degree: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        id_dep: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        tableName: 'services',
        updatedAt: false,
        createdAt: false
    });
    return service;
}