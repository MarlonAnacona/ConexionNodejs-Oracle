const express = require("express"),
  router = express.Router(),
  { _create } = require("../controllers/users");

router.post("/users", async (req, res) => {
  console.log(req);
  try {
    const user = await _create(req.body);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

module.exports = router;
