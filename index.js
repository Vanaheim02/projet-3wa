import express from "express";
// const express = require("express");
import initMiddlewares from "./src/middlewares/init.mdlwr.js";
// const initMiddlewares = require("./src/middlewares/init.mdlwr.js");
import initRoutes from "./src/routes/init.routes.js";
// const initRoutes = require("./routes/init.routes.js");

const app = express();
const PORT = process.env.PORT || 5000;

initMiddlewares(app);
initRoutes(app);

app.get("/", (req, res) => res.send("ok"));

app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}`);
});