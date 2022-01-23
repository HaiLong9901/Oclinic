
module.exports = (req, res, next) => {
    if(!req.session.isAuthenticated){
        return res.redirect('/login');
    }
    if(req.session.authUser.role == 'doctor' || req.session.authUser.role == 'admin'){
        return res.redirect('/');
    }

    next();
}