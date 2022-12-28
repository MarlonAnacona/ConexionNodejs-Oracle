const { create } = require("../services/create");

async function _create(user) {
  return await create(user);
}

module.exports = { _create };
