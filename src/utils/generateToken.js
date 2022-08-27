// ref: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/express-middlewares-gabarito/solutions/5b938de7-9ef9-4f5b-9d22-173cb7f68a09/gabarito-dos-exercicios-de-fixacao/8396e3a0-cf1b-4585-95fa-888e7fc09103?use_case=calendar
const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;