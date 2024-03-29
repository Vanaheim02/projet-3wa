import { UsersDB } from "../databases/users.db.js";

// Contrôleur pour récupérer la liste personnelle de jeux d'un utilisateur
const getMyList = async (req, res) => {
  try {
    // Nous utilisons un middleware d'authentification pour récupérer les informations de l'utilisateur depuis la requête
    const userId = req.user.id;

    // Logique pour récupérer la liste personnelle de jeux de l'utilisateur depuis la base de données
    const myList = await UsersDB.getMyList(userId);

    res.status(200).json(myList);
  } catch (err) {
    console.error("Erreur dans le contrôleur getMyList :", err);
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// Exportez l'objet du contrôleur
export const MyListController = { getMyList };