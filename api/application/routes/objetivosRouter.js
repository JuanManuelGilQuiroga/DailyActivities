const express = require("express");
const ObjetivosController = require("../controllers/objetivosController");
const ObjetivosValidator = require("../validators/objetivosValidator");


const router = express.Router();
const objetivosController = new ObjetivosController();
const objetivosValidator = new ObjetivosValidator();

router.get("/", objetivosValidator.validateGoalsDataEmpty(), (req, res) => objetivosController.getGoals(req, res))

module.exports = router;