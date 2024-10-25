const express = require("express");
const ActividadesController = require("../controllers/actividadesController");
const ActividadesValidator = require("../validators/actividadesValidator");


const router = express.Router();
const actividadesController = new ActividadesController();
const actividadesValidator = new ActividadesValidator();

router.get("/", actividadesValidator.validateActivitiesDataEmpty(), (req, res) => actividadesController.getActivities(req, res))

module.exports = router;