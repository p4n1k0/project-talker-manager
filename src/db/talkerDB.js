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
};

module.exports = {
    getAll,
};