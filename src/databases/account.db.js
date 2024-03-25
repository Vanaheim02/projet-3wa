import { Database } from "./database.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

const AccountDB = {
  // Méthode pour créer un nouveau compte utilisateur
  createUser: async (username, email, password) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const query = `
      INSERT INTO users (username, email, password_hash)
      VALUES (?, ?, ?);
    `;

    const result = await Database.query(query, [username, email, hashedPassword]);
    return result;
  },

  // Méthode pour récupérer les détails d'un utilisateur par son email
  getUserByEmail: async (email) => {
    const query = `
      SELECT *
      FROM users
      WHERE email = ?;
    `;

    const result = await Database.query(query, [email]);
    return result[0]; // Retourne le premier utilisateur trouvé (ou null)
  },

  // Méthode pour mettre à jour le profil d'un utilisateur
  updateProfile: async (userId, profileData) => {
    // Assurez-vous d'ajuster cette méthode en fonction des champs de profil spécifiques
    const query = `
      UPDATE users
      SET profile_data = ?
      WHERE id = ?;
    `;

    const result = await Database.query(query, [JSON.stringify(profileData), userId]);
    return result;
  },

  // Méthode pour changer le mot de passe d'un utilisateur
  changePassword: async (userId, currentPassword, newPassword) => {
    const user = await AccountDB.getUserById(userId);

    if (!user) {
      throw new Error("Utilisateur non trouvé.");
    }

    const isPasswordCorrect = await bcrypt.compare(currentPassword, user.password_hash);

    if (!isPasswordCorrect) {
      throw new Error("Le mot de passe actuel est incorrect.");
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);
    const updateQuery = `
      UPDATE users
      SET password_hash = ?
      WHERE id = ?;
    `;

    const updateResult = await Database.query(updateQuery, [hashedNewPassword, userId]);
    return updateResult;
  },

  // Méthode pour supprimer un compte utilisateur
  deleteUser: async (userId) => {
    const query = `
      DELETE FROM users
      WHERE id = ?;
    `;

    const result = await Database.query(query, [userId]);
    return result;
  },

  // Méthode pour récupérer les détails d'un utilisateur par son ID
  getUserById: async (userId) => {
    const query = `
      SELECT *
      FROM users
      WHERE id = ?;
    `;

    const result = await Database.query(query, [userId]);
    return result[0]; // Retourne le premier utilisateur trouvé (ou null)
  },
};

export { AccountDB };
