const Appointment = require('../models/appointment.js');
const Location = require('../models/location.js'); 
 
exports.getAppointments = (req, res, next) => {
    Appointment.find().populate('location').exec()
    .then(results => {
        res.send(results);
    })
    .catch(error => next(error));
} 
 
exports.postAppointment = (req, res, next) => {

    Location.findOne({postalCode: req.body.location}).exec()
    .then((result) => {
        const location = result._id

        const newAppointment = new Appointment({
            name: req.body.name,
            date: req.body.date,
            location: location,
            type: req.body.type
        });
        
        newAppointment.save()
        .then(results => {
            res.status(201).send(results);
        })
        .catch(error=>next(error));
    })
    .catch((error) => console.log(error));
}
