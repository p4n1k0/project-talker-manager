const fs = require('fs/promises');

const endpoint = 'src/talker.json';

async function getAll() {
    try {
        const data = await fs.readFile(endpoint, 'utf-8');
        const all = JSON.parse(data);

        return all;
    } catch (err) {
        console.log(err);
    }
}

async function insertTalker(talker) {
    try {
        const data = await getAll();
        await fs.writeFile(endpoint, JSON.stringify([...data, talker]));
    } catch (err) {
        console.log(err);
    } 
}

async function updateTalker(talker) {
    try {
        await fs.writeFile(endpoint, JSON.stringify(talker));
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAll, 
    insertTalker, 
    updateTalker,
};