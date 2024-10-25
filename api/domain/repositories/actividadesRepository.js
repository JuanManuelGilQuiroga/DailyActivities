const { ObjectId } = require('mongodb');
const Actividades = require('../models/actividadesModel.js');

module.exports = class ActividadesRepository {
    async getAll() {
        try {
            const actividad = new Actividades();
            return await actividad.findAll();
        } catch (error) {
            throw new Error(JSON.stringify({ status: 404, message: 'Actividades no encontradas.' }));
        }
    }
}