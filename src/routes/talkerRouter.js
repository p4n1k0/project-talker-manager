const express = require('express');
const { getAll, insertToken, tokens } = require('../db/talkerDB');
const generateToken = require('../utils/generateToken');
const validation = require('../middleware/validateLogin');
const validateNameAndAge = require('../middleware/validateNameAndAnge');
const validateTalkerWatchedAt = require('../middleware/validateTalkerWatchedAt');
const validateRate = require('../middleware/validateRate');

const router = express.Router();

router.get('/', async (_req, res) => {
    const data = await getAll();

    res.status(200).json(data);
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

router.post('/', validation, (_req, res) => {
    const token = generateToken();

    insertToken(token);
    res.status(200).json({ token });
});

router.post('/', validateNameAndAge, validateTalkerWatchedAt, validateRate, async (req, res) => {
    const { authorization } = req.headers;
    const talker = res.body;
    const data = await tokens();
  
    if (!authorization) {
        return res.status(401).json({ message: 'Token não encontrado' });
    } 
  
    if (!data.includes(authorization)) {
      return res.status(401).json({ message: 'Token inválido' });
    }
  
    res.status(201).json(talker);
  });

module.exports = router;