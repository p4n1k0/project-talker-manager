const validateWatchedAt = (req, res, next) => {
    const { talk: { watchedAt } } = req.body;
    const validated = (/^([1-9]|\d{2})\/\d{2}\/\d{4}$/).test(watchedAt);

    if (!watchedAt) {
        return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }
    if (!validated) {
        return res.status(400)
            .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }

    next();
};

module.exports = validateWatchedAt;
