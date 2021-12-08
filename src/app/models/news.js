
module.exports = (sequelize, Sequelize) => {
    const sinh_vien = sequelize.define('sinh_vien',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        Ho_Ten: {
            type: Sequelize.STRING,
            defaultValue: "John Doe",
        },
        DoB: {
            type: Sequelize.DATE,
        },
        Score: {
            type: Sequelize.DOUBLE,
        },
    }, {
        freezeTableName: true
    });

    return sinh_vien;
}

