import React from 'react';

// import Player from '../Players/Players';

const PlayerCard = ({ player }) => {
  return (
    <div>
      {console.log(player)}
      <h2>Player: {player.name}</h2>
      <p> {player.searches} </p>
    </div>
  );
}

export default PlayerCard;