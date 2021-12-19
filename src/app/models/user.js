module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('user',{
        id: {
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
        img: {
            type: Sequelize.STRING,
        },
        phone: {
            type: Sequelize.STRING,
            notNULL: true
        },
        email: {
            type: Sequelize.STRING,
        },
        pass: {
            type: Sequelize.STRING,
            notNULL: true
        }
    }, {
        tableName: 'user'
    });
    
    return user;
}