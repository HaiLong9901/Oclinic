const newsRouter = require('./news');
const siteRouter =require('./site');
const introRouter = require('./intro');
const doctorRouter = require('./doctor');
const consultRouter = require('./consultation');
const articleRouter = require('./article');
const notifyRouter = require('./notify');
const settingRouter = require('./setting');
const contactRouter = require('./contact');
function route(app){
    app.use(async (req, res, next) => {
        try {
            if(req.session.isAuthenticated === null){
                req.session.isAuthenticated = false;
            }
            res.locals.lcIsAuthenticated = req.session.isAuthenticated;
            res.locals.lcAuthUser = req.session.authUser;
            res.locals.lcAnnouce = req.session.annouce;
            res.locals.lcAnnouceForPatient = req.session.annouceForPAtient;
            next();
        } catch (error) {
            console.log(error);
        } 
    })
    app.use('/setting', settingRouter);
    app.use('/notifications', notifyRouter);
    app.use('/articles', articleRouter);
    app.use('/consultation', consultRouter);
    app.use('/doctors', doctorRouter);
    app.use('/intro', introRouter);
    app.use('/news', newsRouter);
    app.use('/contact', contactRouter);
    // app.use('/gioi-thieu', introRouter);
    app.use('/', siteRouter);
}

module.exports = route;