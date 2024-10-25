const ActividadesRepository = require("../../domain/repositories/actividadesRepository");

module.exports = class ActividadesService {
    constructor() {
        this.actividadesRepository = new ActividadesRepository();
    }

    async getActivities() {
        const activity = await this.actividadesRepository.getAll();
        if (!activity) {
            throw new Error(
                JSON.stringify({ status: 404, message: "Actividad no encontrada." })
            );
        }
        return activity;
    }
}