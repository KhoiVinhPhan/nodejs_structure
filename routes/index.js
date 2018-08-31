var express = require('express');
var router = express.Router();


router.use('/admin', require("./backend/dashboard"));

module.exports = router;