const express = require('express');
const generateToken = require('../utils/generateToken');
const validation = require('../middleware/validateLogin');

const router = express.Router();

router.post('/', validation, (_req, res) => {
    const token = generateToken();

    res.status(200).json({ token });
});

module.exports = {
    router,
};