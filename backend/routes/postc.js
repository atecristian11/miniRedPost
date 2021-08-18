const express = require("express");
const router = express.Router();
const PostcController = require("../controllers/postc");
const prueba = require("../controllers/user");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");

router.post("/postPerfil", Auth, ValidateUser, PostcController.postPerfil);

router.get("/listPost/:firma?", Auth, ValidateUser, PostcController.listPost);

module.exports = router;
