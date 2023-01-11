import React, { useState } from 'react';
import './styles.css';

function App() {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const [selectedLetter, setSelectedLetter] = useState(alphabet[0]);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    playSound(letter);
  };

  const playSound = (letter) => {
    const audio = new Audio(`http://soundfxcenter.com/human/speech/8d82b5_Letter_${letter}_Sound_Effect.mp3`);
    audio.load();
    audio.play();
  };

  return (
    <div className="container">
      <div className="card-center">
        <h1 className="selected-letter">{selectedLetter}</h1>
      </div>
      <div className="alphabet-container">
        {alphabet.map((letter) => (
          <button className="alphabet-letter" onClick={() => handleLetterClick(letter)}>
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;