const jwtUtils = require("../../utils/jwtUtils.js");

exports.authenticateToken = (req, res, next) => {
    const userId = req.session?.passport?.user;

    if (req.session && userId) {
        const token = req.session.token;

        if (!token) {
        // Si no hay token, responde con 401 y limpia la cookie
        res.clearCookie("connect.sid", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            domain: "localhost",
            sameSite: "strict",
        });
        return res.status(401).json({ error: "Unauthorized: No token provided" });
        }

        jwtUtils.verifyToken(token, (err, user) => {
        if (err) {
            // Si el token no es válido, destruir la sesión y responder con 401
            req.session.destroy((err) => {
            if (err) {
                console.error("Error al destruir la sesión:", err);
            }
            res.clearCookie("connect.sid", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                domain: "localhost",
                sameSite: "strict",
            });
            return res.status(401).json({ error: "Unauthorized: Invalid token" });
            });
        } else if (userId !== user.id) {
            // Si el usuario en la sesión no coincide con el del token
            req.session.destroy((err) => {
            if (err) {
                console.error("Error al destruir la sesión:", err);
            }
            res.clearCookie("connect.sid", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                domain: "localhost",
                sameSite: "strict",
            });
            return res.status(401).json({ error: "Unauthorized: User mismatch" });
            });
        } else {
            // Token válido y usuario coincidente
            req.user = user;
            next();
        }
        });
    } else {
        // Si no hay sesión o usuario, responder con 401
        res.clearCookie("connect.sid", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        domain: "localhost",
        sameSite: "strict",
        });
        return res.status(401).json({ error: "Unauthorized: No session found" });
    }
};