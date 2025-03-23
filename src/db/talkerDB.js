const fs = require('fs/promises');

const endpoint = 'src/talker.json';

async function getTalkers() {
    const data = await fs.readFile(endpoint, 'utf-8');
    const talkers = JSON.parse(data);
    return talkers;
};

async function insertTalker(newTalker) {
    const data = await getTalkers();
    await fs.writeFile(endpoint, JSON.stringify([...data, newTalker]));
};

async function updateTalker(talkerId) {
    await fs.writeFile(endpoint, JSON.stringify(talkerId));
};

async function deleteTalker(talkerId) {
    await updateTalker(talkerId);
};

module.exports = {
    getTalkers,
    insertTalker,
    updateTalker,
    deleteTalker,
};
