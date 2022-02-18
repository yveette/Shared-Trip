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

router.get('/trips/:id', preload(true), (req, res) => {

    if (req.session.user) {
        res.locals.trip.hasUser = true;
        res.locals.trip.isOwner = req.session.user?._id == res.locals.trip.owner._id;
    }

    // TEST
    if (res.locals.trip.seats > 0) {
        res.locals.trip.available = true;
    } else {
        res.locals.trip.available = false;
    }

    res.render('details', { title: 'Details Trip' });
});

module.exports = router;