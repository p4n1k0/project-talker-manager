const fs = require('fs/promises');

const endpoint = 'src/talker.json';
const tokenJSON = 'src/token.json';

async function getAll() {
    try {
        const data = await fs.readFile(endpoint, 'utf-8');
        const all = JSON.parse(data);

        return all;
    } catch (err) {
        console.log(err);
    }
}

async function tokens() {
    try {
        const data = await fs.readFile(tokenJSON, 'utf-8');
        const all = JSON.parse(data);

        return all;
    } catch (err) {
        console.log(err);
    }
}

async function insertToken(token) {
    try {
        const data = await tokens();

        data.push(token);
        fs.writeFile(tokenJSON, JSON.stringify([...data, token]));
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAll, 
    tokens,
    insertToken, 
};