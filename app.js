const ConnectToDatabase = require('./api/infrastructure/db/mongodb.js');
const createServer = require('./infrastructure/server/server.cjs');

//* Función principal que inicia la aplicación
const startApp = async () => {
    let connectToDatabase = new ConnectToDatabase();

    await connectToDatabase.connectOpen();

    const app = createServer();

    app.listen({port: process.env.PORT, host:process.env.HOST}, () => {
        console.log(`http://${process.env.HOST}:${process.env.PORT}`);
    });
};

startApp();