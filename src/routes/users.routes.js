import express from "express";
import { UsersController } from "../controllers/users.controllers.js";
import jwtMdlwr from "../middlewares/jwt.mdlwr.js";

const initUsersRoutes = (app) => {
    const router = express.Router();

    // potentiellement à supprimer
    router.get('/', (req, res) => res.send('index users'));

    // Page d'inscription
    router.get('/sign-up', (req, res) => res.send('page d\'inscription'));
    // URL en POST pour inscrire l'utilisateur
    router.post("/create", jwtMdlwr, UsersController.createUser);

    // Page de connexion
    router.get('/sign-in', (req, res) => res.send('page de connexion'));
    // URL en POST pour connecter l'utilisateur
    router.post("/connect", UsersController.login);

    // delete user
    // router.delete('/:userId', UsersController.deleteUser);
    router.post('/delete', jwtMdlwr, UsersController.deleteUser);

    router.post('/update-password',jwtMdlwr, UsersController.updatePassword);

    app.use("/users", router);
};

export default initUsersRoutes;