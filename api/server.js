const express = require("express"); // Importa Express para crear el servidor
const http = require("http"); // Importa el módulo HTTP para crear un servidor
const corsConfig = require("../middlewares/server/corsConfig.cjs"); // Configuración de CORS
const sessionConfig = require("../middlewares/server/sessionConfig.cjs"); // Configuración de sesiones
const {authenticateToken} = require("../../infrastructure/middlewares/authMiddleware.cjs");
const { limiTotal } = require("../middlewares/rateLimit.cjs");

const createServer = () => {
    const app = express(); // Crea una nueva instancia de Express
    
    // Middlewares
    app.use(corsConfig); // Middleware para configurar CORS
    app.use(express.json()); // Middleware para analizar JSON en las solicitudes
    app.use(sessionConfig); // Middleware para la gestión de sesiones
    app.use(limiTotal); // Middleware para limitar el total de solicitudes
    app.use(express.urlencoded({ extended: true })); // Middleware para analizar datos URL-encoded
    
    const server = http.createServer(app);

    return server; // Retorna el servidor configurado
};

module.exports = createServer;