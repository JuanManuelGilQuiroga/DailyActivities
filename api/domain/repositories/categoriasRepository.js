const { ObjectId } = require('mongodb');
const Categorias = require('../models/categoriasModel.js');

module.exports = class CategoriasRepository {
    async getAll() {
        try {
            const categoria = new Categorias();
            return await categoria.findAll();
        } catch (error) {
            throw new Error(JSON.stringify({ status: 404, message: 'Categoria no encontrada.' }));
        }
    }

    async getById(id) {
        try {
            const categoria = new Categorias();
            return await categoria.findById(id);
        } catch (error) {
            throw new Error(JSON.stringify({ status: 404, message: 'Categoria no encontrada.' }));
        }
    }
}