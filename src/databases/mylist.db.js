import { Database } from "./database.js";

const MyListDB = {
  // Méthode pour ajouter un jeu à la liste personnelle d'un utilisateur
  addGameToUserList: async (userId, gameId) => {
    const query = `
      INSERT INTO user_lists (user_id, game_id)
      VALUES (?, ?);
    `;

    const result = await Database.query(query, [userId, gameId]);
    return result;
  },

  // Méthode pour récupérer tous les jeux dans la liste personnelle d'un utilisateur
  getUserList: async (userId) => {
    const query = `
      SELECT games.*
      FROM games
      JOIN user_lists ON games.id = user_lists.game_id
      WHERE user_lists.user_id = ?;
    `;

    const result = await Database.query(query, [userId]);
    return result;
  },

  // Méthode pour supprimer un jeu de la liste personnelle d'un utilisateur
  removeGameFromUserList: async (userId, gameId) => {
    const query = `
      DELETE FROM user_lists
      WHERE user_id = ? AND game_id = ?;
    `;

    const result = await Database.query(query, [userId, gameId]);
    return result;
  },
};

export { MyListDB };