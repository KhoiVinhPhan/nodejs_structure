var express = require('express');
var router = express.Router();

router.use('/admin', require("./backend/route"));

module.exports = router;