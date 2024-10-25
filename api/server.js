const express = require("express"); // Importa Express para crear el servidor
const http = require("http"); // Importa el módulo HTTP para crear un servidor
const corsConfig = require("./infrastructure/middlewares/corsConfig.js"); // Configuración de CORS
const sessionConfig = require("./infrastructure/middlewares/sessionConfig.js"); // Configuración de sesiones
const {authenticateToken} = require("./infrastructure/middlewares/authMiddleware.js");
const { loginLimiter, getLimiter, postLimiter, deleteLimiter, putLimiter } = require("./infrastructure/middlewares/rateLimit.js");
const UsuarioRoutes = require("./application/routes/usuarioRouter.js")
const ActividadesRoutes = require("./application/routes/actividadesRouter.js")
const CategoriasRoutes = require("./application/routes/categoriasRouter.js")
const EstadisticasRoutes = require("./application/routes/estadisticasRouter.js")
const EtiquetasRoutes = require("./application/routes/etiquetasRouter.js")
const HitosRoutes = require("./application/routes/hitosRouter.js")
const ObjetivosRoutes = require("./application/routes/objetivosRouter.js")
const RecordatorioRoutes = require("./application/routes/recordatorioRouter.js")
const ReportesRoutes = require("./application/routes/reportesRouter.js")

const createServer = () => {
    const app = express(); // Crea una nueva instancia de Express
    
    // Middlewares
    app.use(corsConfig); // Middleware para configurar CORS
    app.use(express.json()); // Middleware para analizar JSON en las solicitudes
    app.use(sessionConfig); // Middleware para la gestión de sesiones
    app.use(loginLimiter, getLimiter, postLimiter, deleteLimiter, putLimiter); // Middleware para limitar el total de solicitudes
    app.use(express.urlencoded({ extended: true })); // Middleware para analizar datos URL-encoded
    
    const server = http.createServer(app);

    app.use("/usuarios", UsuarioRoutes);
    app.use("/actividades", ActividadesRoutes);
    app.use("/categorias", CategoriasRoutes);
    app.use("/estadisticas", EstadisticasRoutes);
    app.use("/etiquetas", EtiquetasRoutes);
    app.use("/hitos", HitosRoutes);
    app.use("/objetivos", ObjetivosRoutes);
    app.use("/recordatorio", RecordatorioRoutes);
    app.use("/reportes", ReportesRoutes);

    return server; // Retorna el servidor configurado
};

module.exports = createServer;