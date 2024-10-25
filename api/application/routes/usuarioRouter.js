const express = require("express");
const UsuarioController = require("../controllers/usuarioController");
const UsuarioValidator = require("../validators/usuarioValidator");


const router = express.Router();
const usuarioController = new UsuarioController();
const usuarioValidator = new UsuarioValidator();

router.get("/", usuarioValidator.validateUserDataEmpty(), (req, res) => usuarioController.getUsers(req, res))

module.exports = router;