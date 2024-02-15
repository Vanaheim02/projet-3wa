import express from "express"
import jwtMdlwr from "../middlewares/jwt.mdlwr.js"
import checkAdmin from "../middlewares/check.admin.js";
import { categoryController } from "../category/calendar.category.js"


const initCategoryRoute = (app) => {
    const categoryRouter = express.Router();
    
    categoryRouter.get('/', categoryController.getAllcategory);
    
    app.use('/category', categoryRouter);
};

export default initCategoryRoute;
