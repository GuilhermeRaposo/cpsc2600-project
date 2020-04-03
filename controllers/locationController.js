const Location = require('../models/location.js'); 
 
exports.getLocations = (req,res, next) => {
    Location.find().exec()
    .then(results => {
        res.send(results);
    })
    .catch(error => next(error));
} 
 
exports.getLocation = (req,res, next) => {
    Location.find({'postalCode': req.params.name}).exec()
    .then(results => {
        res.send(results);
    })
    .catch(error=>next(error));
}
