const express = require("express");
const EtiquetasController = require("../controllers/etiquetasController");
const EtiquetasValidator = require("../validators/etiquetasValidator");


const router = express.Router();
const etiquetasController = new EtiquetasController();
const etiquetasValidator = new EtiquetasValidator();

router.get("/", etiquetasValidator.validateTagsDataEmpty(), (req, res) => etiquetasController.getTags(req, res))

module.exports = router;