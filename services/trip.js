const Trip = require('../models/Trip');

async function getTripById(id) {
    return Trip.findById({});
}


async function createTrip(trip) {
    const result = new Trip(trip);
    await result.save();
}

module.exports = {
    getTripById,
    createTrip
};