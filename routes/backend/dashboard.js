var express = require('express');
var router = express.Router();


var dashBoardController = require('../../controllers/backend/dashboardController');


router.get('/dashboard', dashBoardController.index);

module.exports = router;
