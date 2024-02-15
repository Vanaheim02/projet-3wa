import express from "express"
import jwtMdlwr from "../middlewares/jwt.mdlwr.js"
import { plateformController } from "../controllers/plateform.controllers.js"


const initPlateformRoute = (app) => {
    const plateformRouter = express.Router();
    
    plateformRouter.get('/:gameId', plateformController.getgameId);
    
    app.use('/plateform', plateformRouter);
};

export default initPlateformRoute;


