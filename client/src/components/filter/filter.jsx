import React, { useState } from 'react';
import "./filter.scss";

const jeux = [
  {
    id: 1,
    nom: "Jeu 1",
    genre: "Action",
    plateforme: "PC",
    dateSortie: "2023-01-01",
  },
  {
    id: 2,
    nom: "Jeu 2",
    genre: "Aventure",
    plateforme: "Playstation",
    dateSortie: "2022-12-31",
  }
];

const FilterComponent = () => {
  const [genres, setGenres] = useState([]);
  const [plateformes, setPlateformes] = useState([]);
  const [dateSortieMin, setDateSortieMin] = useState("");
  const [dateSortieMax, setDateSortieMax] = useState("");
  const [filtresVisible, setFiltresVisible] = useState(false);

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    if (genres.includes(genre)) {
      setGenres(genres.filter((g) => g !== genre));
    } else {
      setGenres([...genres, genre]);
    }
  };

  const handlePlateformeChange = (event) => {
    const plateforme = event.target.value;
    if (plateformes.includes(plateforme)) {
      setPlateformes(plateformes.filter((p) => p !== plateforme));
    } else {
      setPlateformes([...plateformes, plateforme]);
    }
  };

  const handleDateSortieMinChange = (event) => {
    setDateSortieMin(event.target.value);
  };

  const handleDateSortieMaxChange = (event) => {
    setDateSortieMax(event.target.value);
  };

  const toggleFiltres = () => {
    setFiltresVisible(!filtresVisible);
  };

  const getFiltredJeux = () => {
    return jeux.filter((jeu) => {
      return (
        (genres.length === 0 || genres.includes(jeu.genre)) &&
        (plateformes.length === 0 || plateformes.includes(jeu.plateforme)) &&
        (!dateSortieMin || jeu.dateSortie >= dateSortieMin) &&
        (!dateSortieMax || jeu.dateSortie <= dateSortieMax)
      );
    });
  };

  const filteredJeux = getFiltredJeux();

  return (
    <div className="app-container">
      <h1>Filtrer les jeux</h1>
      <div className="filtre-container">
        <div className="filtre-cellule" onClick={toggleFiltres}></div>
        {filtresVisible && (
          <div className="filtre-filtres">
            <label>Genre:</label>
            <select className="genre-select" onChange={handleGenreChange}>
              <option value="">Tous</option>
              <option value="Action">Action</option>
              <option value="Aventure">Aventure</option>
              <option value="RPG">RPG</option>
              {/* ... autres genres */}
            </select>
            <label>Plateforme:</label>
            <select className="plateforme-select" onChange={handlePlateformeChange}>
              <option value="">Toutes</option>
              <option value="PC">PC</option>
              <option value="Playstation">Playstation</option>
              <option value="Xbox">Xbox</option>
              {/* ... autres plateformes */}
            </select>
            <label>Date de sortie min:</label>
            <input className="date-min-input" type="date" value={dateSortieMin} onChange={handleDateSortieMinChange} />
            <label>Date de sortie max:</label>
            <input className="date-max-input" type="date" value={dateSortieMax} onChange={handleDateSortieMaxChange} />
          </div>
        )}
      </div>
      <button className="filtre-button" onClick={() => console.log(filteredJeux)}>Appliquer les filtres</button>
      <div className="filtered-jeux-container">
        {filteredJeux.map((jeu) => (
          <div key={jeu.id} className="jeu-card">
            <h2>{jeu.nom}</h2>
            <p>Genre: {jeu.genre}</p>
            <p>Plateforme: {jeu.plateforme}</p>
            <p>Date de sortie: {jeu.dateSortie}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;