const express = require("express");
const RecordatorioController = require("../controllers/recordatorioController");
const RecordatorioValidator = require("../validators/recordatorioValidator");


const router = express.Router();
const recordatorioController = new RecordatorioController();
const recordatorioValidator = new RecordatorioValidator();

router.get("/", recordatorioValidator.validateReminderDataEmpty(), (req, res) => recordatorioController.getReminder(req, res))

module.exports = router;