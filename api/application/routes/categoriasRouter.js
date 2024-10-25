const express = require("express");
const CategoriasController = require("../controllers/categoriasController");
const CategoriasValidator = require("../validators/categoriasValidator");


const router = express.Router();
const categoriasController = new CategoriasController();
const categoriasValidator = new CategoriasValidator();

router.get("/", categoriasValidator.validateCategoriesDataEmpty(), (req, res) => categoriasController.getCategories(req, res))

module.exports = router;