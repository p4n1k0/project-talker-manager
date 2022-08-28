const { tokens } = require('../routes/loginRouter');

const validateToken = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Token não encontrado' });
    }
    if (!tokens.includes(authorization)) {
        return res.status(401).json({ message: 'Token inválido' });
    }

    next();
};

module.exports = validateToken;