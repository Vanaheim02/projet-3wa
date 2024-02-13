// Importez votre module de base de données si nécessaire
// Assurez-vous d'adapter cette partie en fonction de votre base de données réelle
import { Database } from "./database.js";

const PlatformsDB = {
  // Méthode pour ajouter une nouvelle plateforme
  addPlatform: async (platformName) => {
    const query = `
      INSERT INTO platforms (name)
      VALUES (?);
    `;

    const result = await Database.query(query, [platformName]);
    return result;
  },

  // Méthode pour récupérer toutes les plateformes
  getAllPlatforms: async () => {
    const query = `
      SELECT *
      FROM platforms;
    `;

    const result = await Database.query(query);
    return result;
  },

  // Méthode pour associer un jeu à une plateforme
  associateGameWithPlatform: async (gameId, platformId) => {
    const query = `
      INSERT INTO game_platforms (game_id, platform_id)
      VALUES (?, ?);
    `;

    const result = await Database.query(query, [gameId, platformId]);
    return result;
  },

  // Méthode pour récupérer toutes les plateformes d'un jeu
  getPlatformsForGame: async (gameId) => {
    const query = `
      SELECT platforms.*
      FROM platforms
      JOIN game_platforms ON platforms.id = game_platforms.platform_id
      WHERE game_platforms.game_id = ?;
    `;

    const result = await Database.query(query, [gameId]);
    return result;
  },
};

export { PlatformsDB };