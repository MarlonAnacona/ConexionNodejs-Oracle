const db = require("../models");

async function create(user) {
  return await db.user.create(user);
}

module.exports = { create };
