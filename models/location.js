const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let LocationSchema  = new Schema({
    city: {
        type: String, 
        maxlength: 30
    },
    province: {
        type: String, 
        maxlength: 30
    },
    address: {
        type: String, 
        maxlength: 30
    },
    tel: {
        type: String, 
        maxlength: 10
    }
});

let Location = mongoose.model('Location', LocationSchema );

module.exports = Location;
