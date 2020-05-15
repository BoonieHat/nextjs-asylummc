const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

ROUTER.get('/', function (req, res) {
  return res.json({ "Key": "Value" })
})

module.exports = ROUTER;