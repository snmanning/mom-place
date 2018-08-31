const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    user: {
        type: Schema.Types.ObjectID,
        required: true,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        required: true
    },
    entry: {
        type: String,
        required:true
    },
    quote: {
        type: Schema.Types.ObjectID,
        ref: 'Quote'
    }
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;