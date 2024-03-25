import React from 'react';
import { Link } from 'react-router-dom';
import "./category.scss";

const Categorie = ({ categorie }) => {
  return (
    <div className="categorie">
      <Link to={categorie.url}>{categorie.nom}</Link>
    </div>
  );
};

export default Categorie;