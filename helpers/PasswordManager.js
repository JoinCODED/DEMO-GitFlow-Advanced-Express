const { randomBytes, scrypt } = require("crypto");
const { promisify } = require("util");

const scryptAsync = promisify(scrypt);

async function toHash(password) {
  const salt = randomBytes(8).toString("hex");
  const buf = await scryptAsync(password, salt, 64);

  return `${buf.toString("hex")}.${salt}`;
}

function compare() {}

module.exports = { toHash };
