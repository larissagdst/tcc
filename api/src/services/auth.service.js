const jwt = require('jsonwebtoken')

const hashtoken = '1eab5129-3ce4-48d2-8f90-76ea701652ed';

async function createToken(data) {
  const token = jwt.sign(data, hashtoken)

  return token;
}

async function validateToken(token) {
  const decoded = jwt.verify(token, hashtoken)
  return decoded
}

module.exports = {
  createToken,
  validateToken
}