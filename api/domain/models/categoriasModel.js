const ConnectToDatabase = require("../../infrastructure/db/mongodb")

module.exports = class Categorias {

    async findAll() {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('categorias');
        const res = await collection.find().toArray();
        return res;
    }

}