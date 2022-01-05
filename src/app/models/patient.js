
module.exports = (sequelize, Sequelize) => {
    const patient = sequelize.define('patient',{
        id_pat: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            notNULL: true,
            default: 'Hai Long'
        },
        dob: {
            type: Sequelize.DATE,
            notNULL: true
        },
        phonenum: {
            type: Sequelize.STRING,
            notNULL: true
        },
        sex: {
            type: Sequelize.BOOLEAN,
        },

        email: {
            type: Sequelize.STRING,
        },
        // citizen_id: {
        //     type: sequelize.STRING,
        //     notNULL: true
        // },
        pass: {
            type: Sequelize.STRING,
            notNULL: true
        },
        img: {
            type: Sequelize.STRING
        }
    }, {
        tableName: 'patient',
        timestamp: false,
        createdAt: false,
        updatedAt: false
    });
    
    return patient;
}