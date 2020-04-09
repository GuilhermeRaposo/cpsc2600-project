const {check} = require('express-validator');

exports.contactValidator = [
    // Validate name
    check('name', 'Please enter a valid name')
    .trim()
    .escape()
    .isLength({min: 3, max: 25})
    ,
    // Validate the email
    check('email', 'Plase enter a valid email')
    .trim()
    .escape()
    .isEmail()
    ,
    // Validate msg
    check('msg')
    .not().isEmpty()
    .trim()
    .escape()
];

exports.appointmentsValidator = [
        // Validate name
        check('name', 'Please enter a valid name')
        .trim()
        .escape()
        .isLength({min: 3, max: 25})
];