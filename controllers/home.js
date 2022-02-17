const router = require('express').Router();
const preload = require('../middleware/preload');
const { getAllTrips, getTripById } = require('../services/trip');
const { tripViewModel } = require('../util/viewModels');

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

router.get('/trips', async (req, res) => {
    const trips = (await getAllTrips()).map(tripViewModel);
    res.render('catalog', { title: 'Catalog Page', trips });
});

router.get('/trips/:id', preload(), (req, res) => {
    res.render('details', { title: 'Details Trip' });
});

module.exports = router;