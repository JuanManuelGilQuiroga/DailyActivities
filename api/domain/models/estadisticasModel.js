const ConnectToDatabase = require("../../infrastructure/db/mongodb")

module.exports = class Estadisticas {

    async findAll() {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('estadisticas');
        const res = await collection.find().toArray();
        return res;
    }

}