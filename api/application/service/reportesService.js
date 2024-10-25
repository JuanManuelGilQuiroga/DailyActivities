const ReportesRepository = require("../../domain/repositories/reportesRepository");

module.exports = class ReportesService {
    constructor() {
        this.reportesRepository = new ReportesRepository();
    }

    async getReportes() {
        const reports = await this.reportesRepository.getAll();
        if (!reports) {
            throw new Error(
                JSON.stringify({ status: 404, message: "Reportes no encontrado." })
            );
        }
        return reports;
    }
}