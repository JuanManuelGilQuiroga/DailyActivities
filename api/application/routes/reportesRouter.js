const express = require("express");
const ReportesController = require("../controllers/reportesController");
const ReportesValidator = require("../validators/reportesValidator");


const router = express.Router();
const reportesController = new ReportesController();
const reportesValidator = new ReportesValidator();

router.get("/", reportesValidator.validateReportsDataEmpty(), (req, res) => reportesController.getReports(req, res))

module.exports = router;