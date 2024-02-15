import express from "express"
import jwtMdlwr from "../middlewares/jwt.mdlwr.js"
import checkAdmin from "../middlewares/check.admin.js";
import { accountController } from "../controllers/account.controllers.js"

const initaccountRoute = (app) => {
    const accountRouter = express.Router();
    
    accountRouter.get('/:userId', accountControllers.getuser);
    
    app.use('/account', accountRouter);
};

export default initaccountRoute;