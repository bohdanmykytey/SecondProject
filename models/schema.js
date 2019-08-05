const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    address:  { type: String, required: true },
    image: { type: Array },
    review: {type: String}
});

const Schema = mongoose.model('venue', venueSchema);

module.exports = Schema;