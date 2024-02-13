import express from "express"
import jwtMdlwr from "../middlewares/jwt.mdlwr.js"
import checkAdmin from "../middlewares/check.admin.js";
import { myaccountrController } from "../controllers/myaccount.controllers.js"

const initMyaccountRoute = (app) => {
    const myaccountRouter = express.Router();
    
    myaccountRouter.get('/:userId', myaccountControllers.getuser);
    
    app.use('/myaccount', myaccountRouter);
};

export default initMyaccountRoute;