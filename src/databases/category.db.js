import { Database } from "./database.js";

const CategoriesDB = {
  // Méthode pour récupérer toutes les plateformes
  getAllPlatforms: async () => {
    const query = `
      SELECT *
      FROM platforms;
    `;

    const result = await Database.query(query);
    return result;
  },

  // Méthode pour récupérer tous les genres de jeux
  getAllGenres: async () => {
    const query = `
      SELECT *
      FROM game_genres;
    `;

    const result = await Database.query(query);
    return result;
  },

  // Méthode pour ajouter une nouvelle plateforme
  addPlatform: async (platformName) => {
    const query = `
      INSERT INTO platforms (name)
      VALUES (?);
    `;

    const result = await Database.query(query, [platformName]);
    return result;
  },

  // Méthode pour ajouter un nouveau genre de jeu
  addGenre: async (genreName) => {
    const query = `
      INSERT INTO game_genres (name)
      VALUES (?);
    `;

    const result = await Database.query(query, [genreName]);
    return result;
  },
};

export { CategoriesDB };