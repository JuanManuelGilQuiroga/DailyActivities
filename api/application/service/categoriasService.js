const CategoriaRepository = require("../../domain/repositories/categoriasRepository");

module.exports = class CategoriaService {
    constructor() {
        this.categoriaRepository = new CategoriaRepository();
    }

    async getCategorias() {
        const category = await this.categoriaRepository.getAll();
        if (!category) {
            throw new Error(
                JSON.stringify({ status: 404, message: "Categoria no encontrada." })
            );
        }
        return category;
    }
}