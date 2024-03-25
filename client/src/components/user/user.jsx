import { useState, useEffect } from "react";
import "./user.scss";

const User = ({ user }) => {
  const [jeux, setJeux] = useState([]);

  useEffect(() => {
    // Charger la liste de jeux de l'utilisateur depuis le back-end
    // Mettre à jour l'état `jeux` avec la liste des jeux
  }, []);

  const handleAjouterJeu = (jeu) => {
    // Envoyer une requête au back-end pour ajouter le jeu à la liste de l'utilisateur
    // Mettre à jour l'état `jeux` avec le nouveau jeu ajouté
  };

  const handleSupprimerJeu = (jeu) => {
    // Envoyer une requête au back-end pour supprimer le jeu de la liste de l'utilisateur
    // Mettre à jour l'état `jeux` avec le jeu supprimé
  };

  return (
    <div className="user-container">
      <h2>{user.nom}</h2>
      <ul className="jeux-liste">
        {jeux.map((jeu) => (
          <li key={jeu.id}>
            {jeu.nom}
            <button onClick={() => handleSupprimerJeu(jeu)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Nom du jeu" />
        <button onClick={handleAjouterJeu}>Ajouter un jeu</button>
      </form>
    </div>
  );
};

export default User;