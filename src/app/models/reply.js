
module.exports = (sequelize, Sequelize) => {
    const reply = sequelize.define('reply',{
        id_reply: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        id_consult: {
            type: Sequelize.STRING,
            alowNull: false
        },
        content: {
            type: Sequelize.STRING,
            alowNull: false
        },
        seen: {
            type: Sequelize.BOOLEAN,
            default: false
        }
    }, {
        tableName: 'reply',
    });

    
    return reply;
}