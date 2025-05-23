const allTalkers = [
    {
        "name": "Henrique Albuquerque",
        "age": 62,
        "id": 1,
        "talk": { "watchedAt": "23/10/2020", "rate": 5 }
    },
    {
        "name": "Heloísa Albuquerque",
        "age": 67,
        "id": 2,
        "talk": { "watchedAt": "23/10/2020", "rate": 5 }
    },
    {
        "name": "Ricardo Xavier Filho",
        "age": 33,
        "id": 3,
        "talk": { "watchedAt": "23/10/2020", "rate": 5 }
    },
    {
        "name": "Marcos Costa",
        "age": 24,
        "id": 4,
        "talk": { "watchedAt": "23/10/2020", "rate": 5 }
    }
];

const addTalker = {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
        "watchedAt": "22/10/2019",
        "rate": 5
    }
};

const noNameTalker = {
    "name": undefined,
    "age": 56,
    "talk": {
        "watchedAt": "22/10/2019",
        "rate": 5
    }
};

const noCharecterName = {
    "name": "Gt",
    "age": 56,
    "talk": {
        "watchedAt": "22/10/2019",
        "rate": 5
    }
};

const noAgeTalker = {
    "name": "Danielle Santos",
    "age": undefined,
    "talk": {
        "watchedAt": "22/10/2019",
        "rate": 5
    }
};

const subAge = {
    "name": "Danielle Santos",
    "age": 17,
    "talk": {
        "watchedAt": "22/10/2019",
        "rate": 5
    }
};

const noTalk = {
    "name": "Danielle Santos",
    "age": 56,
    "talk": undefined
};

const noTalkWatched = {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
        "watchedAt": undefined,
        "rate": 5
    }
};

const talkWatchedError = {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
        "watchedAt": '123123123',
        "rate": 5
    }
};

const noTalkRate = {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
        "watchedAt": "22/10/2019",
        "rate": undefined
    }
};

const rateSix = {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
        "watchedAt": "22/10/2019",
        "rate": 6
    }
};

module.exports = {
    allTalkers,
    addTalker,
    noNameTalker,
    noCharecterName,
    noAgeTalker,
    subAge,
    noTalk,
    noTalkWatched,
    talkWatchedError,
    noTalkRate,
    rateSix,
};
