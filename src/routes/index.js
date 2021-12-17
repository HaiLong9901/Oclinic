const newsRouter = require('./news');
const siteRouter =require('./site');
const introRouter = require('./intro');
function route(app){
    app.use('/intro', introRouter);
    app.use('/news', newsRouter);
    app.use('/gioi-thieu', introRouter);
    app.use('/', siteRouter);
}

module.exports = route;