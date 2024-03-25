import React from 'react';
import "./fiche.scss";

const Fiche = ({ jeu }) => {
    return (
      <div style={styles.root}>
        <img src={jeu.image} alt={jeu.nom} style={styles.image} />
        <div style={styles.info}>
          <h2 style={styles.title}>{jeu.nom}</h2>
          <p style={styles.text}>**Date de sortie :** {jeu.dateSortie}</p>
          <p style={styles.text}>**Genre :** {jeu.genre}</p>
          <p style={styles.text}>**Plateforme :** {jeu.plateforme}</p>
        </div>
      </div>
    );
  };

  export default Fiche;