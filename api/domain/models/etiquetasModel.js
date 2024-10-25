const ConnectToDatabase = require("../../infrastructure/db/mongodb")
const { ObjectId } = require('mongodb');

module.exports = class Etiquetas {

    async findAll() {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('etiquetas');
        const res = await collection.find().toArray();
        return res;
    }

    async findById (id) {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('etiquetas');
        const [res] = await collection.find({_id: new ObjectId(id)}).toArray();
        return res;
    }

}