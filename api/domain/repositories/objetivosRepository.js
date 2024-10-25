const { ObjectId } = require('mongodb');
const Objetivos = require('../models/objetivosModel.js');

module.exports = class ObjetivosRepository {
    async getAll() {
        try {
            const objetivo = new Objetivos();
            return await objetivo.findAll();
        } catch (error) {
            throw new Error(JSON.stringify({ status: 404, message: 'Objetivos no encontrados.' }));
        }
    }

    async getById(id) {
        try {
            const objetivo = new Objetivos();
            return await objetivo.findById(id);
        } catch (error) {
            throw new Error(JSON.stringify({ status: 404, message: 'Objetivos no encontrados.' }));
        }
    }
}