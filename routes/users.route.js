const { Router } = require("express");

const { usersController } = require("../controllers/users.controller.js");

const router = Router();

router.get("/user/", usersController.addUser);

module.exports = router;
