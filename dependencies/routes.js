const express = require('express');
const router = express.Router();

//Connection to Database
const db = require('./db');

// GET
router.get('/test', (req, res) => {
    res.send('Hello World');
});

// POST
// PUT
// DELETE

module.exports = router;