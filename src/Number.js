import React, { useState } from 'react';
import './number.css';

const AudioNumber = ({ number, handleNumberClick }) => {
  const [audio, setAudio] = React.useState(null);

  React.useEffect(() => {
      import(`./audio/numbers/${number}.mp3`)
          .then(audioModule => setAudio(audioModule.default))
  }, [number]);

  const handleClick = () => {
      const a = new Audio(audio);
      a.load();
      a.play();
      handleNumberClick(number)
  }

  return (
      <button className="order-number" onClick={handleClick}>
          {number}
      </button>
  );
}

function Number() {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];;
  const [selectedNumber, setSelectedNumber] = useState(numbers[0]);

  const handleNumberClick = (number) => {
      setSelectedNumber(number);
  };

  return (
      <div className="container">
          <div className="card-center">
              <h1 className="selected-number">{selectedNumber}</h1>
          </div>
          <div className="number-container">
              {numbers.map(number => <AudioNumber number={number} handleNumberClick={handleNumberClick} key={number} />)}
          </div>
      </div>
  );
}

export default Number;
