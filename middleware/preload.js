const { getTripById } = require('../services/trip');
const { tripDetailsViewModel } = require('../util/viewModels');

function preload() {
    return async function (req, res, next) {
        const id = req.params.id;
        const trip = await getTripById(id);
        res.locals.trip = tripDetailsViewModel(trip);

        if (req.session.user) {
            res.locals.trip.hasUser = true;
        } else {
            res.locals.trip.hasUser = false;
        }

        const userId = req.session.user?._id;
        if (res.locals.trip.owner._id.toString() == userId) {
            res.locals.trip.isOwner = true;
        }

        next();
    };
}

module.exports = preload;