const { ObjectId } = require('mongodb');
const Usuario = require('../models/usuarioModel.js');

module.exports = class UsuarioRepository {
    async getAll() {
        try {
            const user = new Usuario();
            return await user.findAll();
        } catch (error) {
            console.error('Error en getAll:', error);
            throw new Error(JSON.stringify({ status: 404, message: 'Usuarios no encontrados.' }));
        }
    }
}