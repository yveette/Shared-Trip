function tripViewModel(trip) {
    return {
        _id: trip._id,
        start: trip.start,
        end: trip.end,
        date: trip.date,
        time: trip.time,
        carImg: trip.carImg,
        carBrand: trip.carBrand,
        seats: trip.seats,
        price: trip.price,
        description: trip.description,
        owner: ownerViewModel(trip.owner)
    };
}

function ownerViewModel(user) {
    return {
        _id: user._id,
        email: user.email,
        gender: user.gender
    };
}

module.exports = {
    tripViewModel,
    ownerViewModel
};