const fs = require('fs/promises');

const endpoint = 'src/talker.json';

async function getTalkers() {
    try {
        const data = await fs.readFile(endpoint, 'utf-8');
        const talkers = JSON.parse(data);

        return talkers;
    } catch (err) {
        console.log(err);
    }
}

async function insertTalker(newTalker) {
    try {
        const data = await getTalkers();
        await fs.writeFile(endpoint, JSON.stringify([...data, newTalker]));
    } catch (err) {
        console.log(err);
    } 
}

async function updateTalker(talkerId) {
    try {
        await fs.writeFile(endpoint, JSON.stringify(talkerId));
    } catch (err) {
        console.log(err);
    }
}

async function deleteTalker(talkerId) {
    try {
        await updateTalker(talkerId);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getTalkers, 
    insertTalker, 
    updateTalker,
    deleteTalker,
};