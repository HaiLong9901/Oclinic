
class ContactController{

    index = (req, res, next) =>{
        try {
            res.render('contact');
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ContactController;