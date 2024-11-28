import React, { useState } from 'react';
import '../Telas-CSS/jokenpo.css';

const JogoDasEmocoes = ({ onBack, backgroundColor = '' }) => {
  const [movePlayer, setMovePlayer] = useState(null);
  const [moveEnemy, setMoveEnemy] = useState(null);
  const [resultMessage, setResultMessage] = useState('Comece a jogar');

  const playerOptions = ['stone', 'paper', 'scissor'];

  const handlePlayerMove = (move) => {
    setMovePlayer(move);
    const enemyMove = iaEnemyMove();
    setMoveEnemy(enemyMove);
    determineResult(move, enemyMove);
  };

  const iaEnemyMove = () => {
    const randomMove = playerOptions[Math.floor(Math.random() * playerOptions.length)];
    return randomMove;
  };

  const determineResult = (playerMove, enemyMove) => {
    if (playerMove === enemyMove) {
      setResultMessage('Você empatou 😢');
    } else if (
      (playerMove === 'stone' && enemyMove === 'paper') ||
      (playerMove === 'paper' && enemyMove === 'scissor') ||
      (playerMove === 'scissor' && enemyMove === 'stone')
    ) {
      setResultMessage('Você perdeu 😭');
    } else {
      setResultMessage('Você ganhou 🥲');
    }
  };

  return (
    <div className="jogo-das-emocoes-container" style={{ backgroundColor }}>
      <button className="back-button" onClick={onBack}>Voltar</button>
      <h1>Pedra, Papel, Tesoura</h1>

      <div className="game-container">
        <div className="players-container">
          <div className="player">
            {playerOptions.map((option) => (
              <div 
                key={option} 
                className={`option ${movePlayer === option ? 'selected' : ''}`} 
                data-value={option} 
                onClick={() => handlePlayerMove(option)}
              >
                <img src={`assets/${option}.png`} alt={option} />
              </div>
            ))}
          </div>

          <div className="enemy">
            {playerOptions.map((option) => (
              <div 
                key={option} 
                className={`option ${moveEnemy === option ? 'selected' : ''}`} 
                data-value={option}
              >
                <img src={`assets/${option}.png`} alt={option} />
              </div>
            ))}
          </div>
        </div>

        <div className="result-container">
          <span>{resultMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default JogoDasEmocoes;
