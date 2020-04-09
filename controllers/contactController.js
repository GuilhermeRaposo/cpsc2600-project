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
    console.log(newContact)
    newContact.save()
    .then((results) => {
        console.log(123)
        res.status(201).send(results)
    })
    .catch((error) => console.log(error));
}
