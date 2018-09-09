var express = require('express');
var router = express.Router();

var userController = require('../../controllers/backend/userController');

//Route users
router.get("/user", userController.index);
router.get("/user/create", userController.create);

module.exports = router;
