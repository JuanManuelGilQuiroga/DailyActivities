const ReportesService = require("../service/reportesService");
const jwtUtils = require("../../utils/jwtUtils");

module.exports = class ReportesController {
    constructor() {
        this.reportesService = new ReportesService();
    }

    async getReports(req, res) {
        try {
            const reports = await this.reportesService.getReportes();
            if (!reports) {
                return res.status(404).json({ message: "Reportes no encontrados" });
            }
            console.log(reports)
            res.status(200).json(reports);
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({ message: errorObj.message });
        }
    }
}