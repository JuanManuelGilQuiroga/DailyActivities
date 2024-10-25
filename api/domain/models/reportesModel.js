const ConnectToDatabase = require("../../infrastructure/db/mongodb")

module.exports = class Reportes {

    async findAll() {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('reportes');
        const res = await collection.find().toArray();
        return res;
    }
}