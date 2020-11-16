const express = require("express");
const router = express.Router();
const { getWrestlerByDate } = require("../models/wrestlers");
// import functions from bootcamper model

router.get("/", async function (req, res) {
  let result = await getWrestlerByDate(req.body);

  res.json({ payload: result });
  console.log(result);
});

module.exports = router;
