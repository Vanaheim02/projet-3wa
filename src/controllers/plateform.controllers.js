import { PlatformDB } from "../databases/platforms.db.js";

// Contrôleur pour récupérer toutes les plateformes de jeux
const readAll = async (req, res) => {
  try {
    const { error, result } = await PlatformsDB.readAll();

    if (error) {
      return res.status(500).json({ error: "Erreur lors de la récupération des plateformes de jeux." });
    }

    res.status(200).json({ platforms: result });
  } catch (err) {
    console.error("Erreur dans le contrôleur readAll des plateformes :", err);
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// Exportez l'objet du contrôleur
export const PlatformController = { readAll };