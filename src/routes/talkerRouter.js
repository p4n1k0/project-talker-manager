const express = require('express');
const { getAll, insertTalker } = require('../db/talkerDB');
const validateToken = require('../middleware/validateToken');
const validateName = require('../middleware/validateName');
const validateAge = require('../middleware/validateAge');
const validateWatchedAt = require('../middleware/validateWatchedAt');
const validateTalk = require('../middleware/validateTalk');

const router = express.Router();

router.get('/', async (_req, res) => {
    const data = await getAll();

    res.status(200).json(data);
});

router.post('/', validateToken, validateAge, validateName, validateTalk, validateWatchedAt,  
        async (req, res) => {
            const talker = res.body;
            const data = await getAll();
            const newId = Number(data[data.length - 1].id) + 1;

            data.id = newId;
            talker.id = newId;
            await insertTalker(talker);

            res.status(201).json(talker);
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