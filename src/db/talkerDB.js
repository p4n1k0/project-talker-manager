const fs = require('fs/promises');

const endpoint = 'src/talker.json';
const dataToken = 'src.token.json';

async function getAll() {
    try {
        const data = await fs.readFile(endpoint, 'utf-8');
        const all = JSON.parse(data);

        return all;
    } catch (err) {
        console.log(err);
    }
}

// eslint-disable-next-line sonarjs/no-identical-functions
async function getTokens() {
    try {
      const data = await fs.readFile(dataToken, 'utf-8');
      const all = JSON.parse(data);

      return all;
    } catch (err) {
      console.log(err);
    }
  }

async function insertToken(token) {
    try {
        const data = await getTokens();

        data.push(token);
        fs.writeFile(dataToken, JSON.stringify([...data, token]));
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAll,
    getTokens,
    insertToken,
};