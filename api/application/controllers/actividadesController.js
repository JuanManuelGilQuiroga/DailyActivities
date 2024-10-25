const ActividadesService = require("../service/actividadesService");
const jwtUtils = require("../../utils/jwtUtils");

module.exports = class ActividadesController {
    constructor() {
        this.actividadesService = new ActividadesService();
    }

    async getActivities(req, res) {
        try {
            const activities = await this.actividadesService.getActivities();
            if (!activities) {
                return res.status(404).json({ message: "Actividades no encontradas" });
            }
            console.log(activities)
            res.status(200).json(activities);
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({ message: errorObj.message });
        }
    }
}