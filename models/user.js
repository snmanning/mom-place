const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const jwt = require('crypto');
const moment = require('moment');

mongoose.set('useCreateIndexes', true);

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    hash: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
});

userSchema.methods.setPassword = function setPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512')
                        .toString('hex');
    this.salt = salt;
    this.hash = hash;
}

userSchema.methods.isValidPassword = function isValidPassword(password) {
    const possibleHash = crypto.pbkdf2Sync(password, this.salt, 100000, 64, 'sha512')
                                .toString('hex');
    return this.hash === possibleHash;
}

userSchema.methods.generateJWT = function generateJWT() {
    const payload = {
        id: this._id,
        email: this.email,
        exp: moment().add(2, 'hours').toDate().getTime()
    };
    const token = jwt.createSign(payload, process.env.SECRET);
    return token;
}

const User = mongoose.model('User', userSchema);

module.exports = User;