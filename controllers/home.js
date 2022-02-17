const router = require('express').Router();
const { getAllTrips } = require('../services/trip');
const { tripViewModel } = require('../util/viewModels');

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

router.get('/trips', async (req, res) => {
    const trips = (await getAllTrips()).map(tripViewModel);
    res.render('catalog', { title: 'Catalog Page', trips });
});

module.exports = router;