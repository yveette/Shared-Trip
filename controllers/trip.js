const router = require('express').Router();

const { isUser, isGuest } = require('../middleware/guards');
const { getTripById, createTrip } = require('../services/trip');
const mapErrors = require('../util/mappers');


router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Trip Offer', data: {} });
});

router.post('/create', (req, res) => {
    console.log(req.body);
    res.redirect('/trips');
});

module.exports = router;