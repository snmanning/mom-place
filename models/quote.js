const mongoose = require('mongoose');
const Schema = Schema.mongoose;

// mongoose.set('useCreateIndexes', true);

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