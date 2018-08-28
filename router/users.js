const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
// const auth = require('../middleware/auth'); //I'll need this if I add a delete option

// sign up POST
router.post('/signup', async (req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return next({ msg: 'You have not submitted an email and password', status: 400});
    }
    try {
        const user = new User({ email });
        user.setPassword(password);
        await user.save();
    } catch (error) {
        return next(error);
    }
});

// login POST
router.post('/login',
            passport.authenticate('local', { session: false }),
            async (req, res, next) => {
                if(isAuthenticated()) {
                    res.status(200).json({
                        token: req.authInfo.token
                    })
                } else {
                    return next({ msg: 'Either your username or password is incorrect', status: 400 });
                }
});

module.exports = router;