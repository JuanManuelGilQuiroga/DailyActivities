const express = require("express");
const HitosController = require("../controllers/hitosController");
const HitosValidator = require("../validators/hitosValidator");


const router = express.Router();
const hitosController = new HitosController();
const hitosValidator = new HitosValidator();

router.get("/", hitosValidator.validateMilestonesDataEmpty(), (req, res) => hitosController.getMilestones(req, res))

module.exports = router;