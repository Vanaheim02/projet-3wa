import { CalendarDB } from "../databases/calendar.db.js";

// Contrôleur pour récupérer les sorties de jeux pour une année calendaire
const getGamesForYear = async (req, res) => {
  try {
    const { year } = req.params; // Supposons que l'année est fournie en tant que paramètre dans la requête

    // Logique pour récupérer les sorties de jeux pour l'année calendaire depuis la base de données
    const gamesForYear = await CalendarDB.getGamesForYear(year);

    res.status(200).json({ games: gamesForYear });
  } catch (err) {
    console.error("Erreur dans le contrôleur getGamesForYear :", err);
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// Exportez l'objet du contrôleur
export const calendarController = { getGamesForYear };