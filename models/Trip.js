const { Schema, model, Types: { ObjectId } } = require('mongoose');

const URL_PATTERN = /^https?:\/\/(.+)/;

const tripSchema = new Schema({
    start: { type: String, required: true, minlength: [4, 'The Starting Point should be at least 4 characters long '] },
    end: { type: String, required: true, minlength: [4, 'The End Point should be at least 4 characters long '] },
    date: { type: String, required: true },
    time: { type: String, required: true },
    carImg: {
        type: String, required: true, validate: {
            validator(value) {
                return URL_PATTERN.test(value);
            },
            message: 'Car image should be starts with http:// or https://'
        }
    },
    carBrand: { type: String, required: true, minlength: [4, 'The Car Brand should be at least 4 characters long '] },
    seats: { type: Number, required: true, min: [0, 'The seats be positive number'], max: [4, 'The seats can be max 4'] },
    price: { type: Number, required: true, min: [1, 'Price starts from 1 BGN'], max: [50, 'Price can be max 50 BGN'] },
    description: { type: String, required: true, minlength: [4, 'The Description should be at least 10 characters long '] },
    owner: { type: ObjectId, ref: 'User', required: true },
    buddies: { type: [ObjectId], ref: 'User', default: [] },
});

const Trip = model('Trip', tripSchema);

module.exports = Trip;