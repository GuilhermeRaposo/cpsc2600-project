const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let AppointmentSchema  = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
            type: Schema.Types.ObjectId, 
            ref: 'Location'
    },
    type: {
        type: String,
        required: true
    }
});

let Appointment = mongoose.model('Appointment', AppointmentSchema );

module.exports = Appointment;
