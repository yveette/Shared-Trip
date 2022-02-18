const router = require('express').Router();
const preload = require('../middleware/preload');
const { getAllTrips, getTripsByUser } = require('../services/trip');
const { tripViewModel } = require('../util/viewModels');
const { isUser } = require('../middleware/guards');

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

router.get('/trips', async (req, res) => {
    const trips = (await getAllTrips()).map(tripViewModel);
    res.render('catalog', { title: 'Catalog Page', trips });
});

router.get('/trips/:id', preload(true), (req, res) => {
    const trip = res.locals.trip;

    trip.remainingSeats = trip.seats - trip.buddies.length;

    if (req.session.user) {
        trip.hasUser = true;
        trip.isOwner = req.session.user?._id == trip.owner._id;

        if (trip.buddies.some(b => b._id == req.session.user._id)) {
            trip.isJoined = true;
        }
    }

    res.render('details', { title: 'Details Trip' });
});

router.get('/profile', isUser(), async(req, res) => {
    const tripsByUser = await getTripsByUser( res.locals.user._id);

    res.locals.user.tripCount = tripsByUser.length;
    res.locals.user.trips = tripsByUser;

    res.render('profile', { title: 'Profile Page' });
});

module.exports = router;