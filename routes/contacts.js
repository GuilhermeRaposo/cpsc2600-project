const router = require('express').Router();

const contacts = require('../controllers/contactController.js');

const {contactValidator} = require('../validators.js')
const {validationResult} = require('express-validator')
 
router.get('/', (req, res, next) => {
    contacts.getContacts(req, res, next);
});

router.post('/', contactValidator, (req, res, next) => {
    const valErrors = validationResult(req).array();

    if (valErrors.length != 0) {
        // Error
        res.status(422).send(valErrors);
    }
    else {
        // Sucess
        contacts.postContact(req, res, next);
    }
});
 
const contactRouter = router; 
 
module.exports = contactRouter;

