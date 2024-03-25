import { UsersDB } from "../databases/users.db.js";

// Contrôleur pour récupérer les infos du compte utilisateur
const getAccountInfo = async (req, res) => {
  try {
    // Récupération de l'ID utilisateur depuis la requête
    const userId = req.user.id;

    // Récupération des infos du compte depuis la base de données
    const userInfo = await UsersDB.getUserInfo(userId);

    // Envoi d'une réponse 404 si aucune info n'est trouvée
    if (!userInfo) {
      return res.status(404).json({ error: "Utilisateur non trouvé." });
    }

    // Envoi des infos de l'utilisateur s'il y en a
    res.status(200).json(userInfo);
  } catch (err) {
    // Gestion des erreurs avec un message 500
    console.error("Erreur dans getMyAccountInfo :", err);
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// Export de la fonction pour obtenir les infos du compte
export const AccountController = { getAccountInfo };