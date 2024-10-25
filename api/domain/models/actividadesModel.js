const ConnectToDatabase = require("../../infrastructure/db/mongodb")

module.exports = class Actividades {

    async findAll() {
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('actividades');
        const res = await collection.find().toArray();
        return res;
    }

}