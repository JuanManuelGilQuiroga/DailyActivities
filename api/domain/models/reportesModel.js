const ConnectToDatabase = require("../../infrastructure/db/mongodb")
const { ObjectId } = require('mongodb');

module.exports = class Reportes {

    async findAll() {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('reportes');
        const res = await collection.find().toArray();
        return res;
    }

    async findById (id) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('reportes');
        const [res] = await collection.find({_id: new ObjectId(id)}).toArray();
        return res;
    }

}