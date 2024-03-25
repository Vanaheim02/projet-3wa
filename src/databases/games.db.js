// Importez votre module de base de données si nécessaire
// Assurez-vous d'adapter cette partie en fonction de votre base de données réelle
import Database from "./init.db.js";

const UsersDB = {
	// Méthode pour créer un nouvel utilisateur
	createUser: async (mail, password) => {
		const query = `
      INSERT INTO users (mail, password)
      VALUES (?, ?);
    `;

		const result = await Database(query, [mail, password]);
		return result;
	},

	/**
	 * Vérifie si l'adresse mail est disponible
	 * @author Manon Rouquette
	 *
	 * @param {string} mail		Adresse mail à vérifier
	 * @returns RowDataPacket|boolean
	 */
	checkEmailAvailable: async (mail) => {
		const query = `
			SELECT
				mail
			FROM
				users
			WHERE
				mail = ?
		;`;

		const result = await Database(query, [mail]);
		if(typeof result[0] !== 'undefined')
			return false;

		return true;
	},

	signIn: async (mail) => {
		const query = `
			SELECT *
			FROM users
			WHERE mail = ?
		;`;

		const result = await Database(query, [mail]);

		if (typeof result[0] !== 'undefined')
			return result[0];

		return false;
	},

	updatePassword: async (userId, hashedPassword) => {
		const query = `UPDATE users
			SET password = ?
			WHERE id = ?
		;`;

		const result = await Database(query, [hashedPassword, userId]);
		return result;
	},

	/**
	 * Méthode pour supprimer un utilisateur
	 * @author Manon Rouquette
	 *
	 * @param {int} userId		ID de l'utilisateur
	 * @returns OkPacket|boolean
	 */
	deleteUser: async (userId) => {
		const query = `
			DELETE FROM users
			WHERE id = ?;
		`;

		const result = await Database(query, [userId]);
		return result;
	},

	/**
	 * Méthode pour récupérer les détails d'un utilisateur par son identifiant
	 * @author Manon Rouquette
	 *
	 * @param {int} userId 		ID de l'utilisateur
	 * @returns RowDatePacket|boolean
	 */
	getUserById: async (userId) => {
		const query = `
			SELECT *
			FROM users
			WHERE id = ?;
		`;

		const result = await Database(query, [userId]);

		// Retourne le premier utilisateur trouvé, ou false
		if(typeof result[0] !== 'undefined')
			return result[0];

		return false;
	},

	// Méthode pour récupérer les détails d'un utilisateur par son nom d'utilisateur
	getUserByUsername: async (username) => {
		const query = `
      SELECT *
      FROM users
      WHERE username = ?;
    `;

		const result = await query(query, [username]);
		return result[0];
	},

	// Méthode pour mettre à jour le token de réinitialisation de mot de passe
	updateResetToken: async (userId, resetToken) => {
		const query = `
      UPDATE users
      SET reset_token = ?
      WHERE id = ?;
    `;

		const result = await query(query, [resetToken, userId]);
		return result;
	},

	// Méthode pour marquer l'adresse e-mail comme vérifiée
	markEmailAsVerified: async (userId) => {
		const query = `
      UPDATE users
      SET is_email_verified = TRUE
      WHERE id = ?;
    `;

		const result = await query(query, [userId]);
		return result;
	},

	// Méthode pour ajouter un jeu à la liste personnelle d'un utilisateur
	addGameToUserList: async (userId, gameId) => {
		const query = `
      INSERT INTO user_lists (user_id, game_id)
      VALUES (?, ?);
    `;

		const result = await query(query, [userId, gameId]);
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

		const result = await query(query, [userId]);
		return result;
	},

	// Méthode pour supprimer un jeu de la liste personnelle d'un utilisateur
	removeGameFromUserList: async (userId, gameId) => {
		const query = `
      DELETE FROM user_lists
      WHERE user_id = ? AND game_id = ?;
    `;

		const result = await query(query, [userId, gameId]);
		return result;
	}
};

export { UsersDB };