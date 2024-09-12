const validateEmail = (email) => {
    // ref: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const validated = (/\S+@\S+\.\S+/).test(email);
    return validated;
};

const validation = (req, res, next) => {
    const { email, password } = req.body;

    if (!email) { return res.status(400).json({ message: 'O campo "email" é obrigatório' }); }
    if (!password) { return res.status(400).json({ message: 'O campo "password" é obrigatório' }); }
    if (!validateEmail(email)) {
        return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }

    next();
};

module.exports = validation;
