const express = require('express');
const Recipes = require('./recipe-model');

const router = express.Router();

router.use('*', (req, res, next) => {
    res.json({ api: 'up' })
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: 'Something went wrong',
        error: err.message,
        stack: err.stack
    })
})

module.exports = router;