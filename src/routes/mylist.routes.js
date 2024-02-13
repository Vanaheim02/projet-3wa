import express from "express"
import jwtMdlwr from "../middlewares/jwt.mdlwr.js"
import checkAdmin from "../middlewares/check.admin.js";
import { mylistController } from "../controllers/mylist.controllers.js"


const initMylistRoute = (app) => {
    const mylistRouter = express.Router();
    
    mylistRouter.get('/:plateformId', mylistController.getplateformiId);
    
    app.use('/mylist', mylistRouter);
};

export default initMylistRoute;