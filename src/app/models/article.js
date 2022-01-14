

module.exports = (sequelize, Sequelize) => {
    const article =  sequelize.define('article',{
        id_art: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        id_ad: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        id_doc: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        link: {
            type: Sequelize.STRING,
            allowNull: false
        },
        img: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        tableName: 'article'
    });
    return article;
}