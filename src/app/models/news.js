const Sequelize = require('sequelize');
const sequelize = new Sequelize('longdh', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
});
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

module.exports = new sinh_vien;