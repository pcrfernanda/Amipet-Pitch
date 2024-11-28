// JogoDaVelha.js
import React, { useState, useEffect } from 'react';
import '../Telas-CSS/Velha.css';

const JogoDaVelha = ({ onBack, backgroundColor = '' }) => {
  const [player, setPlayer] = useState('X');
  const [selected, setSelected] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const resetGame = () => {
    setSelected(Array(9).fill(null));
    setPlayer('X');
    setWinner(null);
  };

  const handleMove = (index) => {
    if (selected[index] || winner) return;

    const newSelected = [...selected];
    newSelected[index] = player;
    setSelected(newSelected);

    const nextPlayer = player === 'X' ? 'O' : 'X';
    setPlayer(nextPlayer);
  };

  const checkWinner = () => {
    for (const pos of positions) {
      const [a, b, c] = pos;
      if (selected[a] && selected[a] === selected[b] && selected[a] === selected[c]) {
        setWinner(selected[a]);
        return;
      }
    }
    if (selected.every((cell) => cell)) setWinner('Empate');
  };

  useEffect(() => {
    checkWinner();
  }, [selected]);

  return (
    <div className="jogo-da-velha-container" style={{ backgroundColor }}>
      <button className="back-button" onClick={onBack}>Voltar</button>
      <h1>JOGO DA VELHA</h1>
      <div className="game">
        {selected.map((value, index) => (
          <button key={index} onClick={() => handleMove(index)}>{value}</button>
        ))}
      </div>
      <h2 className="currentPlayer">
        {winner ? (winner === 'Empate' ? 'DEU EMPATE!' : `O JOGADOR '${winner}' GANHOU!`) : `JOGADOR DA VEZ: ${player}`}
      </h2>
      {winner && <button className="reset-button" onClick={resetGame}>Reiniciar Jogo</button>}
    </div>
  );
};

export default JogoDaVelha;
