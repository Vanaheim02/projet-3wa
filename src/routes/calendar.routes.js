import express from "express"
import jwtMdlwr from "../middlewares/jwt.mdlwr.js"
import checkAdmin from "../middlewares/check.admin.js";
import { calendarController } from "../controllers/calendar.controllers.js"

const initCalendarRoutes = (app) => {
    const calendarRouter = express.Router();
    
    calendarRouter.get('/:year', calendarController.getGamesForYear);
    
    app.use('/calendar', calendarRouter);
};

export default initCalendarRoutes;