const mongoose = require('mongoose');
const Schema = Schema.mongoose;

const quoteSchema = new Schema({
    author: {
        type: String
    },
    body: {
        type: String
    }
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;