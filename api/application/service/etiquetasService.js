const EtiquetasRepository = require("../../domain/repositories/etiquetasRepository");

module.exports = class EtiquetasService {
    constructor() {
        this.etiquetasRepository = new EtiquetasRepository();
    }

    async getEtiquetas() {
        const tags = await this.etiquetasRepository.getAll();
        if (!tags) {
            throw new Error(
                JSON.stringify({ status: 404, message: "Etiqueta no encontrada." })
            );
        }
        return tags;
    }
}