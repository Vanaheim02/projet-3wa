import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [games, setGames] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState("Toutes");
  const [selectedGame, setSelectedGame] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetch(`https://api.example.com/games?month=${date.getMonth()}&year=${date.getFullYear()}&platform=${selectedPlatform}`)
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, [date, selectedPlatform]);

  const handleChange = (newDate) => {
    setDate(newDate);
  };

  const handlePlatformChange = (e) => {
    setSelectedPlatform(e.target.value);
  };

  const handleGameClick = (gameId) => {
    fetch(`https://api.example.com/games/${gameId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedGame(data);
        setModalIsOpen(true);
      });
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Calendar
        onChange={handleChange}
        value={date}
      />
      <select value={selectedPlatform} onChange={handlePlatformChange}>
        <option value="Toutes">Toutes</option>
        <option value="PC">PC</option>
        <option value="PlayStation 4">PlayStation</option>
        <option value="PlayStation 5">PlayStation</option>
        <option value="Xbox">Xbox one</option>
        <option value="Xbox">Xbox Series</option>
        {/* ...autres plateformes */}
      </select>
      <ul>
        {games.map((game) => (
          <li key={game.id} onClick={() => handleGameClick(game.id)}>
            <img src={game.icon} alt={game.title} />
            {game.title} ({game.releaseDate}) - {game.platform}
          </li>
        ))}
      </ul>
      {selectedGame && (
        <Modal
          isOpen={modalIsOpen}
          onClose={handleModalClose}
        >
          <h2>{selectedGame.title}</h2>
          <p>{selectedGame.releaseDate}</p>
          <p>{selectedGame.platform}</p>
          <p>{selectedGame.description}</p>
        </Modal>
      )}
    </div>
  );
};

export default CalendarComponent;