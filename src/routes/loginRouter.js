const express = require('express');
const { insertToken } = require('../db/talkerDB');
const generateToken = require('../utils/generateToken');
const validation = require('../middleware/validateLogin');

const router = express.Router();

router.post('/', validation, (_req, res) => {
    const token = generateToken();

    insertToken(token);
    res.status(200).json({ token });
});

module.exports = router;