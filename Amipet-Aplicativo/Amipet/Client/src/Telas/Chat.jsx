import React from 'react';

const Chat = ({ onBack }) => {
  return (
    <div>
      <h1>Chat Screen</h1>
      <button className="back-button" onClick={onBack}>Voltar</button>
    </div>
  );
};

export default Chat;
