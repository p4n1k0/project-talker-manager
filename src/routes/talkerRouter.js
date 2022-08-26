const express = require('express');
const { getAll } = require('../db/talkerDB');

const router = express.Router();

router.get('/', async (_req, res) => {
    const result = await getAll();
    
    res.status(200).json(result)
});

module.exports = router;