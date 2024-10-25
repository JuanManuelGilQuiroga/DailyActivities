const RecordatorioService = require("../service/recordatorioService");
const jwtUtils = require("../../utils/jwtUtils");

module.exports = class RecordatorioController {
    constructor() {
        this.recordatorioService = new RecordatorioService();
    }

    async getReminder(req, res) {
        try {
            const reminder = await this.recordatorioService.getRecordatorio();
            if (!reminder) {
                return res.status(404).json({ message: "Recordatorio no encontrados" });
            }
            console.log(reminder)
            res.status(200).json(reminder);
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({ message: errorObj.message });
        }
    }
}