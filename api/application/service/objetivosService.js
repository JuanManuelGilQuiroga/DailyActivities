const ObjetivosRepository = require("../../domain/repositories/objetivosRepository");

module.exports = class ObjetivosService {
    constructor() {
        this.objetivosRepository = new ObjetivosRepository();
    }

    async getObjetivos() {
        const goal = await this.objetivosRepository.getAll();
        if (!goal) {
            throw new Error(
                JSON.stringify({ status: 404, message: "Objetivo no encontrado." })
            );
        }
        return goal;
    }
}