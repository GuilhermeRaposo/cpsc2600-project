const router = require('express').Router();

const contatcs = require('../controllers/contactController.js');
 
router.get('/', (req, res, next) => {
    contatcs.getContacts(req, res, next);
});

router.post('/', (req, res, next) => {
    contatcs.postContact(req, res, next);
});
 
const contactRouter = router; 
 
module.exports = contactRouter;

