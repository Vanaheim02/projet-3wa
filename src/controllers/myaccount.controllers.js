import { UsersDB } from "../databases/users.db.js";

// Contrôleur pour récupérer les informations du compte utilisateur
const getMyAccountInfo = async (req, res) => {
  try {
    // Supposons que vous avez un middleware d'authentification qui place les informations de l'utilisateur dans req.user
    const userId = req.user.id;

    // Logique pour récupérer les informations du compte utilisateur depuis la base de données
    const userInfo = await UsersDB.getUserInfo(userId);

    if (!userInfo) {
      return res.status(404).json({ error: "Utilisateur non trouvé." });
    }

    res.status(200).json(userInfo);
  } catch (err) {
    console.error("Erreur dans le contrôleur getMyAccountInfo :", err);
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// Exportez l'objet du contrôleur
export const MyAccountController = { getMyAccountInfo };