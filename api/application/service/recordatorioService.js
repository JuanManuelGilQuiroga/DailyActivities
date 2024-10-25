const RecordatorioRepository = require("../../domain/repositories/recordatorioRepository");

module.exports = class RecordatorioService {
    constructor() {
        this.recordatorioRepository = new RecordatorioRepository();
    }

    async getRecordatorio() {
        const reminder = await this.recordatorioRepository.getAll();
        if (!reminder) {
            throw new Error(
                JSON.stringify({ status: 404, message: "Recordatorio no encontrado." })
            );
        }
        return reminder;
    }
}