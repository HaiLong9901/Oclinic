const newsRouter = require('./news');
const siteRouter =require('./site');
const introRouter = require('./intro');
const doctorRouter = require('./doctor');
function route(app){
    app.use('/doctors', doctorRouter);
    app.use('/intro', introRouter);
    app.use('/news', newsRouter);
    app.use('/gioi-thieu', introRouter);
    app.use('/', siteRouter);
}

module.exports = route;