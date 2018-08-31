const express = require('express');
const router = express.Router();
const Entry = require('../models/entry');
const auth = require('../middleware/auth');

router.use(auth); //protect all of these routes

//new entry POST
router.post('/entry', async (req, res, next) => {
    const { entry, createdAt, quote } = req.body;
    if(!entry) {
        next({ msg: 'Unable to save an empty entry', status: 400});
    }
    try {
        const entry = new Entry({ entry, createdAt, quote, user: req.id});
        await entry.save();
        res.status(201).json({
            msg: 'Your entry has been saved'
        })
    } catch (err) {
        next(err);
    }
});

//retrieve the last location GET
router.get('/entry', async (req, res, next) => {
    try {
        const entry = await Entry.findById({ user: req.id });
        res.status(200).json({
            entry
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;