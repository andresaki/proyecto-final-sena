const express = require("express");
const errorMiddleware = require("./middleware/errors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const productos = require("./routes/products");
const usuarios = require("./routes/auth");
const ingresos = require("./routes/ingresos");
const gastos = require("./routes/gastos");
const movimientoStock = require("./routes/movimientosStock");
const clientes = require("./routes/clientes");
const pedidos = require("./routes/pedidos");



if (process.env.NODE_ENV !== "PRODUCTION")
    require("dotenv").config({ path: "back/config/config.env" });



const app = express(); 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());



app.use("/api", productos);
app.use("/api", usuarios);
app.use("/api", ingresos);
app.use("/api", gastos);
app.use("/api", movimientoStock);
app.use("/api", clientes);
app.use("/api", pedidos);

if (process.env.NODE_ENV === "PRODUCTION") {
    app.use(express.static(path.join(__dirname, "../front/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../front/dist/index.html"));
    });
}

// Middlewares para manejar errores
app.use(errorMiddleware);

// Exportamos la instancia de la aplicación Express para que pueda ser utilizada en otros archivos
module.exports = app;
