const ConnectToDatabase = require("../../infrastructure/db/mongodb")

module.exports = class Recordatorio {

    async findAll() {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('recordatorio');
        const res = await collection.find().toArray();
        return res;
    }
}