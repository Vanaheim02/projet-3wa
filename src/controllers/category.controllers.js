
import { CategoriesDB } from "../databases/categories.db.js";

// Contrôleur pour récupérer toutes les catégories de jeux vidéo
const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoriesDB.getAllCategories();

    res.status(200).json(categories);
  } catch (err) {
    console.error("Erreur dans le contrôleur getAllCategories :", err);
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// Exportez l'objet du contrôleur
export const CategoryController = { getAllCategories };