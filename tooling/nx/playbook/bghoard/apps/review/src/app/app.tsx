import React, { useEffect, useState } from 'react';
import { Game } from '@bghoard/api-interfaces';

export const App = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/games')
      .then((r) => r.json())
      .then(setGames);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Board Game Hoard: Review</h1>
      </div>

      <div>
        {games.map((game, index) => (
          <div key={index}>
            <h3>{game.name}</h3>
            {game.image && <img src={game.image} alt={`${game.name}`}></img>}
            <p>{game.description}</p>
            <p>
              <b>USD {game.price.toFixed(2)}</b>
            </p>
            {game.rating && <p>Rating: {game.rating.toFixed(2)} stars</p>}
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
