const validateWatchedAt = (req, res, next) => {
    const { talk: { watchedAt } } = req.body;
    // ref: https://www.delftstack.com/pt/howto/javascript/javascript-validate-date/
    const validated = (/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/)
      .test(watchedAt);

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