
module.exports = (req, res, next) => {
    if(!req.session.isAuthenticated){
        return res.redirect('/login');
    }
    if(req.session.authUser.role == 'doctor' || req.session.authUser.role == 'admin'){
        alert('Chỉ có tài khoản bệnh nhân mới có chức năng này');
        return res.redirect('/');
    }

    next();
}