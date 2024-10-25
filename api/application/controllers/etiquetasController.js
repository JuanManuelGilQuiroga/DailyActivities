const EtiquetasService = require("../service/etiquetasService");
const jwtUtils = require("../../utils/jwtUtils");

module.exports = class EtiquetasController {
    constructor() {
        this.etiquetasService = new EtiquetasService();
    }

    async getTags(req, res) {
        try {
            const tags = await this.etiquetasService.getEtiquetas();
            if (!tags) {
                return res.status(404).json({ message: "Etiquetas no encontradas" });
            }
            console.log(tags)
            res.status(200).json(tags);
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({ message: errorObj.message });
        }
    }
}