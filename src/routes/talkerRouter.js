const express = require('express');
const { getTalkers, insertTalker, updateTalker, deleteTalker } = require('../db/talkerDB');
const validateToken = require('../middleware/validateToken');
const validateNameAndAge = require('../middleware/validateNameAndAge');
const validateWatchedAt = require('../middleware/validateWatchedAt');
const validateTalk = require('../middleware/validateTalk');

const router = express.Router();

router.get('/', async (_req, res) => {
    const data = await getTalkers();

    res.status(200).json(data);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const data = await getTalkers();
    const talker = data.find((talkerId) => talkerId.id === Number(id));

    if (talker) { return res.status(200).json(talker); }

    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

router.post('/', validateToken, validateNameAndAge, validateTalk, validateWatchedAt,
    async (req, res) => {
        const talker = req.body;
        const talkers = await getTalkers();

        const newId = Number(talkers[talkers.length - 1].id) + 1;
        talker.id = newId;
        await insertTalker(talker);

        res.status(201).json(talker);
    });

router.put('/:id', validateToken, validateNameAndAge, validateTalk, validateWatchedAt,
    async (req, res) => {
        const { name, age, talk } = req.body;
        const { id } = req.params;
        const data = await getTalkers();
        const faker = data.filter((fake) => fake.id !== Number(id));
        const talker = data.find((t) => t.id === Number(id));

        talker.name = name;
        talker.age = age;
        talker.talk = talk;

        await updateTalker([...faker, talker]);

        res.status(200).json(talker);
    });

router.delete('/:id', validateToken, async (req, res) => {
    const { id } = req.params;
    const data = await getTalkers();
    const faker = data.filter((fake) => fake.id !== Number(id));

    await deleteTalker(faker);

    res.status(204).end();
});

module.exports = router;
