
module.exports = (req, res, next) => {
    if(req.body.pass !== req.body.retype){
        res.render('home', {
            className1: 'formRegisterOpen',
            retypeFail: true
        })
    }
}