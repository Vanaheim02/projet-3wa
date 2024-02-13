import cors from "cors"
import express from "express"
import helmet from "helmet"
// const cors = require("cors");
// const express = require('express');
// const helmet = require('helmet');

const initMiddlewares = (app) => {
    app.use (express.json());
    app.use (express.urlencoded({ extended : true}))
    app.use(cors({ Orgin: "*"}));
    app.use (helmet());
}

export default initMiddlewares;
// module.exports = initMiddlewares;