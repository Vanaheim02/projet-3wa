// Importez votre module de base de données si nécessaire
// Assurez-vous d'adapter cette partie en fonction de votre base de données réelle
import query from "./init.db.js";

const CalendarDB = {
  // Méthode pour récupérer les sorties de jeux pour une année calendaire
  getGamesForYear: async (year) => {
    const query = `
      SELECT date, platform, genre
      FROM game_releases
      WHERE YEAR(date) = ${year};
    `;

    // Exécutez la requête dans votre base de données et retournez les résultats
    const result = await query(query);
    return result;
  },
};

export { CalendarDB };