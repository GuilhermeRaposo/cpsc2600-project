const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ContactSchema  = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: Date,
        required: true
    },
    msg: {
        type: String,
        required: true
    }
});

let Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
