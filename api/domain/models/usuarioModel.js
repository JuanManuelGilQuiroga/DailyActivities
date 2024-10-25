const ConnectToDatabase = require("../../infrastructure/db/mongodb")

module.exports = class Usuarios {

    async findAll() {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('usuarios');
        const res = await collection.find().toArray();
        return res;
    }

}