const ObjetivosService = require("../service/objetivosService");
const jwtUtils = require("../../utils/jwtUtils");

module.exports = class ObjetivosController {
    constructor() {
        this.objetivosService = new ObjetivosService();
    }

    async getGoals(req, res) {
        try {
            const goal = await this.objetivosService.getObjetivos();
            if (!goal) {
                return res.status(404).json({ message: "Objetivos no encontrados" });
            }
            console.log(goal)
            res.status(200).json(goal);
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({ message: errorObj.message });
        }
    }
}