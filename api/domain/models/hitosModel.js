const ConnectToDatabase = require("../../infrastructure/db/mongodb")

module.exports = class Hitos {

    async findAll() {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('hitos');
        const res = await collection.find().toArray();
        return res;
    }

}