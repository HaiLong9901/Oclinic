
module.exports = (sequelize, Sequelize) => {
    const consultation = sequelize.define('consultation',{
        id_consult: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        id_doc: {
            type: Sequelize.STRING,
            alowNull: false
        },
        id_pat: {
            type: Sequelize.STRING,
            alowNull: false
        },
        _sensitive: {
            type: Sequelize.STRING,
            alowNull: false
        },
        img: {
            type: Sequelize.STRING,
            alowNull: true,
        },
        service: {
            type: Sequelize.STRING,
            alowNull: false,
        },
        seen: {
            type: Sequelize.BOOLEAN,
            default: 0
        }
    }, {
        tableName: 'consultation',
        // timestamp: false,
        // createdAt: false,
        updatedAt: false
    });

    
    return consultation;
}