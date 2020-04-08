const router = require('express').Router(); 
 
const appointmentsRouter = require('./appointments.js');
const contactsRouter = require('./contacts.js');
const locationsRouter = require('./locations.js'); 

router.use('/appointments', appointmentsRouter);
router.use('/contact', contactsRouter);  
router.use('/locations', locationsRouter);
 
module.exports = router;
