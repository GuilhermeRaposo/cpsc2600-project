const router = require('express').Router();

const appointments = require('../controllers/appointmentController.js');
 
router.get('/', (req, res, next) => {
    appointments.getAppointments(req, res, next);
});

router.post('/', (req, res, next) => {
    appointments.postAppointment(req, res, next);
});
 
const appointmentRouter = router; 
 
module.exports = appointmentRouter;

