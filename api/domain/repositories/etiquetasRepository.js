const { ObjectId } = require('mongodb');
const Etiquetas = require('../models/etiquetasModel.js');

module.exports = class EtiquetasRepository {
    async getAll() {
        try {
            const etiquetas = new Etiquetas();
            return await etiquetas.findAll();
        } catch (error) {
            throw new Error(JSON.stringify({ status: 404, message: 'Etiquetas no encontradas.' }));
        }
    }

    async getById(id) {
        try {
            const etiquetas = new Etiquetas();
            return await etiquetas.findById(id);
        } catch (error) {
            throw new Error(JSON.stringify({ status: 404, message: 'Etiquetas no encontradas.' }));
        }
    }
}