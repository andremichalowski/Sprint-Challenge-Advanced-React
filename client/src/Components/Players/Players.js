import React from 'react';

const Players = ({ players }) => {
  return (
    <div>
      {players.map((player) => (
        <div className='player-container' key={player.id}>
          {console.log(player)}
          <h2>{player.name}</h2>
          <p>{player.country}</p>
        </div>
      ))}
    </div>
  );
}

export default Players; 