const express = require('express');
const { getAll } = require('../db/talkerDB');
const generateToken = require('../utils/generateToken');
const { validateEmail, validatePassword } = require('../middleware/validateLogin');

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
// 3 falhando
router.post('/', validatePassword, validateEmail, (_req, res) => {
    const token = generateToken();

    res.status(200).json({ token });
  });

module.exports = router;