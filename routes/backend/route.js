var express = require('express');
var router = express.Router();
var userController = require('../../controllers/backend/userController');

//Config body-parser
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Route users
router.get("/user", userController.index);
router.get("/user/create", userController.create);
router.post("/user/store", urlencodedParser, userController.store);
router.get("/user/:id/edit", userController.edit);
router.post("/user/update", urlencodedParser, userController.update);
router.get("/user/:id/deleted", userController.deleted);

module.exports = router;
