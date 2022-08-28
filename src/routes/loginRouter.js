const express = require('express');
const generateToken = require('../utils/generateToken');
const validation = require('../middleware/validateLogin');

const router = express.Router();

const tokens = [];

router.post('/', validation, (_req, res) => {
    const token = generateToken();

    tokens.push(token);
    res.status(200).json({ token });
});

module.exports = {
    router,
    tokens,
};