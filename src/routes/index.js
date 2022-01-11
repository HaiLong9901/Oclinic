const newsRouter = require('./news');
const siteRouter =require('./site');
const introRouter = require('./intro');
const doctorRouter = require('./doctor');
const consultRouter = require('./consultation');
const articleRouter = require('./article');
const notifyRouter = require('./notify');
function route(app){
    app.use('/notifications', notifyRouter);
    app.use('/articles', articleRouter);
    app.use('/consultation', consultRouter);
    app.use('/doctors', doctorRouter);
    app.use('/intro', introRouter);
    app.use('/news', newsRouter);
    app.use('/gioi-thieu', introRouter);
    app.use('/', siteRouter);
}

module.exports = route;