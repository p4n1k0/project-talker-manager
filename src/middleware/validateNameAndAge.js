const validateNameAndAge = (req, res, next) => {
    const { name, age } = req.body;
    if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    if (name.length < 3) return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' }); // quem se chama Ur se lasca
    if (!age && age !== 0) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    if (age < 18) return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' }); // não deveria ser
    next();
};

module.exports = validateNameAndAge;
