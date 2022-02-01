
module.exports = (sequelize, Sequelize) => {
    const evaluation = sequelize.define('evaluation', {
        id_pat: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        starNum: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        evaluate: {
            type: Sequelize.STRING,
            allowNull: true
        },
        createdAt: {
            type: Sequelize.DATE,
            primaryKey: true,
        }
    },{
        tableName: 'evaluation',
        updatedAt: false,
        id: false
    })

    return evaluation;
}