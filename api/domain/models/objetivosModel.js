const ConnectToDatabase = require("../../infrastructure/db/mongodb")

module.exports = class Objetivos {

    async findAll() {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('objetivos');
        const res = await collection.find().toArray();
        return res;
    }
}