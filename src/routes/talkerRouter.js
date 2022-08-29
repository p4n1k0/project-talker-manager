const express = require('express');
const { getAll, insertTalker } = require('../db/talkerDB');
const validateToken = require('../middleware/validateToken');
const validateNameAndAge = require('../middleware/validateNameAndAge');
const validateWatchedAt = require('../middleware/validateWatchedAt');
const validateTalk = require('../middleware/validateTalk');

const router = express.Router();

router.get('/', async (_req, res) => {
    const data = await getAll();

    res.status(200).json(data);
});

router.post('/', validateToken, validateNameAndAge, validateTalk, validateWatchedAt,  
        async (req, res) => {
            const talker = req.body;
            const newTalker = { id: 5, ...talker };
            await insertTalker(newTalker);        

            res.status(201).json(newTalker);
        });

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const data = await getAll();
    const talker = data.find((t) => t.id === Number(id));

    if (talker) {
        return res.status(200).json(talker);
    }

    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

module.exports = router;