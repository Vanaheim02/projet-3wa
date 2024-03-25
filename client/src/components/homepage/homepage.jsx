import React from "react";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="container">
      <div className="game-container">
        <div className="game-info">
			<img src="client/src/img/bloodlines.jpg" alt="" />
          <h2>Vampire : The Masquerade Bloodlines 2 </h2>
          <div className="game-details">
            <p>Date de sortie : 2024</p>
            <p>Plateformes : PC, PlayStation 5, Xbox Series X/S</p>
          </div>
        </div>
      </div>

      <div className="game-container">
        <div className="game-info">
          <h2>Star Wars Outlaws</h2>
          <div className="game-details">
            <p>Date de sortie : 2024</p>
            <p>Plateformes : Nintendo Switch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;