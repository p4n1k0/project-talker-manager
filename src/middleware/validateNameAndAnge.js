const validateNameAndAge = (req, res, next) => {
    const { name, age } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }

    if (name.length < 3) {
        (res.status(400)).json({ message: 'O "name" deve ter pelo menos 3 caracteres' }); // Quem se chama Ur se lasca
    }
    if (age < 18) {
        (res.status(400).json({ nessage: 'A pessoa palestrante deve ser maior de idade' })); // mas não deveria ser
    }

    next();
};

module.exports = validateNameAndAge;