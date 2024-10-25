const { ObjectId } = require('mongodb');
const Estadisticas = require('../models/estadisticasModel.js');

module.exports = class EstadisticasRepository {
    async getAll() {
        try {
            const estadistica = new Estadisticas();
            return await estadistica.findAll();
        } catch (error) {
            throw new Error(JSON.stringify({ status: 404, message: 'Estadistica no encontrada.' }));
        }
    }

    async getById(id) {
        try {
            const estadistica = new Estadisticas();
            return await estadistica.findById(id);
        } catch (error) {
            throw new Error(JSON.stringify({ status: 404, message: 'Estadistica no encontrada.' }));
        }
    }
}