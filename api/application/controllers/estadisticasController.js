const EstadisticasService = require("../service/estadisticasService");
const jwtUtils = require("../../utils/jwtUtils");

module.exports = class EstadisticasController {
    constructor() {
        this.estadisticasService = new EstadisticasService();
    }

    async getStatistics(req, res) {
        try {
            const statistics = await this.estadisticasService.getEstadisticas();
            if (!statistics) {
                return res.status(404).json({ message: "Estadisticas no encontradas" });
            }
            console.log(statistics)
            res.status(200).json(statistics);
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({ message: errorObj.message });
        }
    }
}