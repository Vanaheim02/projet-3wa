import isEmail from "validator/lib/isEmail.js";
import { hashPass, compareHash } from "../utils/crypto.utils.js";
import { UsersDB } from "../databases/users.db.js";

// Fonction de création d'un utilisateur
const create = async(req, res) => {
    const { email, password, pseudo } = req.body;

    // Vérifier la validité de l'email
    //if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/[A-Z]/.test(email) || !/[!@#$%^&*(),.?":{}|<>]/.test(email))
    if (!email || !isEmail(email)) {
        return res.status(403).json({ message: `Invalid email !` });
    }

    // Vérifier la longueur du mot de passe
    if (!password || password.length <= 8) {
        return res
            .status(403)
            .json({ message: `Password must have at least 9 characters` });
    }

    // Vérifier la longueur du pseudo
    if (!pseudo || pseudo.length <= 4) {
        return res
            .status(403)
            .json({ message: `Pseudo must have at least 5 characters` });
    }

    // Hasher le mot de passe
    const hashResult = await hashPass(password);
    const hashError = hashResult.error;
    if (hashError) {
        return res.status(500).json({ message: hashError });
    }

    // Insérer l'utilisateur dans la base de données
    const response = await UsersDB.create(email, hashResult.hashed, pseudo);
    const responseError = response.error;

    if (responseError) {
        return res.status(500).json({ message: responseError });
    }

    // Récupérer l'ID de l'utilisateur créé
    const userId = response.result.insertId;

    return res.status(200).json({ message: "User created", user: userId });
};

// connect
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Ajoutez ici des vérifications supplémentaires si nécessaire

        // Recherchez l'utilisateur dans la base de données (simulation)
        // Remplacez cette logique par une vérification réelle de l'identité de l'utilisateur
        const user = await User.findOne({ email, password });

        if (user) {
            // L'utilisateur est authentifié avec succès
            res.status(200).json({ message: "Connexion réussie !" });
        } else {
            // L'authentification a échoué
            res.status(401).json({ error: "Email ou mot de passe incorrect." });
        }
    } catch (error) {
        console.error("Erreur lors de la connexion de l'utilisateur :", error);
        res.status(500).json({ error: "Erreur lors de la connexion de l'utilisateur." });
    }

};


// delete user
// Fonction de suppression d'un utilisateur
const deleteOne = async(req, res) => {
    // Récupérer l'ID de l'utilisateur à partir des paramètres de la requête
    const userId = req.params.userId;

    // Appeler la fonction deleteOne de UsersDB pour supprimer l'utilisateur de la base de données
    const response = await UsersDB.deleteOne(userId);
    console.log(response);

    let error = response.error;

    // Gérer les erreurs éventuelles lors de la suppression
    if (error) {
        return res.status(500).json({ message: error });
    }
    else {
        return res.status(200).json({ message: `user ${userId} deleted` });
    }
};


// Contrôleur pour récupérer la liste personnelle de jeux d'un utilisateur
const getMyList = async (req, res) => {
  try {
    // Supposons que vous avez un middleware d'authentification qui place les informations de l'utilisateur dans req.user
    const userId = req.user.id;

    // Logique pour récupérer la liste personnelle de jeux de l'utilisateur depuis la base de données
    const myList = await UsersDB.getMyList(userId);

    res.status(200).json(myList);
  } catch (err) {
    console.error("Erreur dans le contrôleur getMyList :", err);
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// Contrôleur pour ajouter un jeu à la liste de l'utilisateur
const addToMyList = async (req, res) => {
  try {
    const { userId, gameId, platformId } = req.body; // Supposons que les données nécessaires sont incluses dans le corps de la requête

    // Logique pour ajouter le jeu à la liste personnelle de jeux de l'utilisateur dans la base de données
    const result = await UsersDB.addToMyList(userId, gameId, platformId);

    res.status(200).json({ success: true, message: "Jeu ajouté à la liste personnelle." });
  } catch (err) {
    console.error("Erreur dans le contrôleur addToMyList :", err);
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// Contrôleur pour supprimer un jeu de la liste de l'utilisateur
const removeFromMyList = async (req, res) => {
  try {
    const { userId, gameId, platformId } = req.body; // Supposons que les données nécessaires sont incluses dans le corps de la requête

    // Logique pour supprimer le jeu de la liste personnelle de jeux de l'utilisateur dans la base de données
    const result = await UsersDB.removeFromMyList(userId, gameId, platformId);

    res.status(200).json({ success: true, message: "Jeu supprimé de la liste personnelle." });
  } catch (err) {
    console.error("Erreur dans le contrôleur removeFromMyList :", err);
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// Exportez l'objet du contrôleur
export const UsersController = { create, login, getMyList, addToMyList, removeFromMyList };