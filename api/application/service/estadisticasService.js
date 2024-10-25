const EstadisticasRepository = require("../../domain/repositories/estadisticasRepository");

module.exports = class EstadisticasService {
    constructor() {
        this.estadisticasRepository = new EstadisticasRepository();
    }

    async getEstadisticas() {
        const statistic = await this.estadisticasRepository.getAll();
        if (!statistic) {
            throw new Error(
                JSON.stringify({ status: 404, message: "Estadisticas no encontrada." })
            );
        }
        return statistic;
    }
}