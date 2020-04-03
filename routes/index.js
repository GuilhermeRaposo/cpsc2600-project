const router = require('express').Router(); 
 
const locationsRouter = require('./locations.js'); 
 
router.use('/locations', locationsRouter); 
 
module.exports = router;
