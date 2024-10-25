const { ObjectId } = require('mongodb');
const Recordatorio = require('../models/recordatorioModel.js');

module.exports = class RecordatorioRepository {
    async getAll() {
        try {
            const recordatorio = new Recordatorio();
            return await recordatorio.findAll();
        } catch (error) {
            throw new Error(JSON.stringify({ status: 404, message: 'Recordatorios no encontrados.' }));
        }
    }
}