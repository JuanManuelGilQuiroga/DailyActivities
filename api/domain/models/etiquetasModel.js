const ConnectToDatabase = require("../../infrastructure/db/mongodb")

module.exports = class Etiquetas {

    async findAll() {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('etiquetas');
        const res = await collection.find().toArray();
        return res;
    }

}