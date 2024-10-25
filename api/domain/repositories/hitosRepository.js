const { ObjectId } = require('mongodb');
const Hitos = require('../models/hitosModel.js');

module.exports = class HitosRepository {
    async getAll() {
        try {
            const hito = new Hitos();
            return await hito.findAll();
        } catch (error) {
            throw new Error(JSON.stringify({ status: 404, message: 'Hitos no encontrados.' }));
        }
    }

    async getById(id) {
        try {
            const hito = new Hitos();
            return await hito.findById(id);
        } catch (error) {
            throw new Error(JSON.stringify({ status: 404, message: 'Hitos no encontrados.' }));
        }
    }
}