import React, { useEffect } from 'react';
import '../Telas-CSS/chat.css';

const Chat = ({ onBack, backgroundColor = '' }) => {
  useEffect(() => {
    function chatbot(input) {
      let output = '';
      input = input.toLowerCase();
      if (input.includes('ola') || input.includes('oi')) {
        output = 'Oi, eu sou seu novo amiguinho';
      } else if (input.includes('como você está')) {
        output = 'Eu estou bem.';
      } else if (input.includes('qual é o seu nome')) {
        output = 'Meu nome é Capibara';
      } else if (input.includes('oque vc sabe fazer')) {
        output = 'Eu sei contar piadas e muito mais coisas.';
      } else if (input.includes('me conte uma piada')) {
        output = 'Por que o gato não gosta de computador? Porque ele prefere o "mouse".';
      } else {
        output = 'Desculpa, não entendi o que você falou.';
      }
      return output;
    }

    function displayBotMessage(message) {
      const chat = document.getElementById('chat');
      chat.innerHTML = ''; // Limpa o chat para mostrar apenas a resposta do bot

      const botMessage = document.createElement('div');
      botMessage.classList.add('message', 'bot');
      const botText = document.createElement('div');
      botText.classList.add('text');
      botText.innerText = message;
      botMessage.appendChild(botText);
      chat.appendChild(botMessage);
      chat.scrollTop = chat.scrollHeight;
    }

    function sendMessage() {
      const input = document.getElementById('input').value;
      if (input) {
        const output = chatbot(input);
        document.getElementById('input').value = ''; // Limpa o campo de entrada

        // Adiciona um atraso de 1,5 segundos para exibir a mensagem do bot
        setTimeout(() => {
          displayBotMessage(output);
        }, 800);
      }
    }

    document.getElementById('button').addEventListener('click', sendMessage);
    document.getElementById('input').addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        sendMessage();
      }
    });
  }, []);

  return (
    <div className="chat-container" style={{ backgroundColor, height: '100vh' }}>
      <button className="back-button" onClick={onBack}>Voltar</button>
      <div className="container">
        <div className="title">Chat com seu amiguinho</div>
        <div className="chat" id="chat"></div>
        <div className="input-container">
          <input
            type="text"
            className="input"
            id="input"
            placeholder="Escreva sua mensagem"
          />
          <button className="button" id="button">
            <i className="fa-brands fa-telegram"></i> Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;