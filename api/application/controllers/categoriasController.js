const CategoriasService = require("../service/categoriasService");
const jwtUtils = require("../../utils/jwtUtils");

module.exports = class CategoriasController {
    constructor() {
        this.categoriasService = new CategoriasService();
    }

    async getCategories(req, res) {
        try {
            const categories = await this.categoriasService.getCategorias();
            if (!categories) {
                return res.status(404).json({ message: "Categorias no encontradas" });
            }
            console.log(categories)
            res.status(200).json(categories);
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({ message: errorObj.message });
        }
    }
}