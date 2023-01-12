import React, { useState } from 'react';
import './styles.css';

const AudioLetter = ({ letter, handleLetterClick }) => {
  const [audio, setAudio] = React.useState(null);

  React.useEffect(() => {
      import(`./audio/${letter}.mp3`)
          .then(audioModule => setAudio(audioModule.default))
  }, [letter]);

  const handleClick = () => {
      const a = new Audio(audio);
      a.load();
      a.play();
      handleLetterClick(letter)
  }

  return (
      <button className="alphabet-letter" onClick={handleClick}>
          {letter}
      </button>
  );
}

function Alphabet() {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const [selectedLetter, setSelectedLetter] = useState(alphabet[0]);

  const handleLetterClick = (letter) => {
      setSelectedLetter(letter);
  };

  return (
      <div className="container">
          <div className="card-center">
              <h1 className="selected-letter">{selectedLetter}</h1>
          </div>
          <div className="alphabet-container">
              {alphabet.map(letter => <AudioLetter letter={letter} handleLetterClick={handleLetterClick} key={letter} />)}
          </div>
      </div>
  );
}

export default Alphabet;