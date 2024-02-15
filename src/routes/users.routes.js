import express from "express";
import { UsersController } from "../controllers/users.controllers.js";

const initUsersRoutes = (app) => {
    const router = express.Router();

    // potentiellement à supprimer
    router.get('/', (req, res) => res.send('index users'));

    // Page d'inscription
    router.get('/sign-up', (req, res) => res.send('page d\'inscription'));
    // URL en POST pour inscrire l'utilisateur
    router.post("/create", UsersController.create);

    // Page de connexion
    router.get('/sign-in', (req, res) => res.send('page de connexion'));
    // URL en POST pour connecter l'utilisateur
    router.post("/connect", UsersController.login);

    app.use("/users", router);
};

export default initUsersRoutes;