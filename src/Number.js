import React, { useState } from 'react';
import './number.css';

function Number() {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
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
        {numbers.map((number) => (
          <button className="order-number" onClick={() => handleNumberClick(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Number;
