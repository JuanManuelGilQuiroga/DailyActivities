const { ObjectId } = require('mongodb');
const Reportes = require('../models/reportesModel.js');

module.exports = class ReportesRepository {
    async getAll() {
        try {
            const reporte = new Reportes();
            return await reporte.findAll();
        } catch (error) {
            throw new Error(JSON.stringify({ status: 404, message: 'Reportes no encontrados.' }));
        }
    }

    async getById(id) {
        try {
            const reporte = new Reportes();
            return await reporte.findById(id);
        } catch (error) {
            throw new Error(JSON.stringify({ status: 404, message: 'Reportes no encontrados.' }));
        }
    }
}