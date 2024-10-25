const express = require("express");
const EstadisticasController = require("../controllers/estadisticasController");
const EstadisticasValidator = require("../validators/estadisticasValidator");


const router = express.Router();
const estadisticasController = new EstadisticasController();
const estadisticasValidator = new EstadisticasValidator();

router.get("/", estadisticasValidator.validateStatisticsDataEmpty(), (req, res) => estadisticasController.getStatistics(req, res))

module.exports = router;