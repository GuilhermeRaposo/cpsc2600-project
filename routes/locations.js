const router = require('express').Router();

const locations = require('../controllers/locationController.js');
 
router.get('/', (req, res, next) => {
    locations.getLocations(req, res, next);
});

router.get('/:name', (req, res, next) => {
    locations.getLocation(req, res, next);
});
 
const locationRouter = router; 
 
module.exports = locationRouter;

