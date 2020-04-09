const router = require('express').Router();

const appointments = require('../controllers/appointmentController.js');

const {appointmentsValidator} = require('../validators.js')
const {validationResult} = require('express-validator')
 
router.get('/', (req, res, next) => {
    appointments.getAppointments(req, res, next);
});

router.post('/', appointmentsValidator, (req, res, next) => {
    const valErrors = validationResult(req).array();

    if (valErrors.length != 0) {
        // Error
        res.status(422).send(valErrors);
    }
    else {
        // Sucess
        appointments.postAppointment(req, res, next);
    }
});
 
const appointmentRouter = router; 
 
module.exports = appointmentRouter;

