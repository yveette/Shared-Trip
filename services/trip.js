const Trip = require('../models/Trip');

async function getAllTrips() {
    return Trip.find({}).populate('owner');
}

async function getTripById(id) {
    return Trip.findById({});
}

async function createTrip(trip) {
    const result = new Trip(trip);
    await result.save();
}

module.exports = {
    getAllTrips,
    getTripById,
    createTrip
};