const { getTripById, getTripAndUsers } = require('../services/trip');
const { tripDetailsViewModel, tripViewModel } = require('../util/viewModels');

function preload(populate) {
    return async function (req, res, next) {
        const id = req.params.id;
        
        if (populate) {
            const trip = await getTripAndUsers(id);
            res.locals.trip = tripDetailsViewModel(trip);
        } else {
            const trip = await getTripById(id);
            res.locals.trip = tripViewModel(trip); 
        }

        next();
    };
}

module.exports = preload;