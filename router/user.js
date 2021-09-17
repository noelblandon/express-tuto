const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/userController");


router.get('/',userController.getAllData);
router.post('/',userController.createUser);




module.exports = router;