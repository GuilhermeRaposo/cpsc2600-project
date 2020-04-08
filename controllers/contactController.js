const Contact = require('../models/contact.js');
 
exports.getContacts = (req, res, next) => {
    Contact.find().exec()
    .then(results => {
        res.send(results);
    })
    .catch(error => next(error));
} 
 
exports.getContact = (req,res, next) => {
    Contact.find({'name': req.params.email}).exec()
    .then(results => {
        res.send(results);
    })
    .catch(error=>next(error));
}

exports.postContact = (req, res, next) => {
    const newContact = new Contact(req.body);

    Contact.save()
    .then((results) => {
        res.status(201).send(results)
    })
    .catch((error) => error);
}
