const HitosRepository = require("../../domain/repositories/hitosRepository");

module.exports = class HitosService {
    constructor() {
        this.hitosRepository = new HitosRepository();
    }

    async getHitos() {
        const milestones = await this.hitosRepository.getAll();
        if (!milestones) {
            throw new Error(
                JSON.stringify({ status: 404, message: "Hito no encontrada." })
            );
        }
        return milestones;
    }
}