const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let LocationSchema  = new Schema({
    city: {
        type: String, 
        maxlength: 20
    },
    province: {
        type: String, 
        maxlength: 2
    },
    address: {
        type: String, 
        maxlength: 30
    },
    tel: {
        type: String, 
        maxlength: 10
    },
    postalCode: {
        type: String,
        maxlength: 7
    },
    appointments: [{
        type: Schema.Types.ObjectId, 
        ref: 'Appointment'
    }]
});

let Location = mongoose.model('Location', LocationSchema );

module.exports = Location;
