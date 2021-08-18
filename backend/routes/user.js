const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const Auth = require("../middleware/auth");
const ValidateUSer = require("../middleware/validateUser");

router.post("/registerUser", UserController.registerUser);

router.get("/listUser/:cedula?", Auth, ValidateUSer, UserController.listUser);

module.exports = router;
