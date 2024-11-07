import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './App.css';
import backgroundImage from './images/background.jpg';

function App() {
  const [count, setCount] = useState(0);
  const [containerActive, setContainerActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
    setButtonActive('increment');
    setTimeout(() => setButtonActive(null), 200); // Reset active status after effect
  };

  const handleDecrement = () => {
    setCount(count - 1);
    setButtonActive('decrement');
    setTimeout(() => setButtonActive(null), 200);
  };

  return (
    <div
      className={`app-background ${containerActive ? 'container-active' : ''}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={() => setContainerActive(!containerActive)}
    >
      {/* Welcome Message */}
      <div className="welcome-message">
        Welcome to Counter App
      </div>

      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="counter-container">
        <h1>Counter: {count}</h1>
        <button
          className={`counter-button ${buttonActive === 'increment' ? 'button-active' : ''}`}
          onClick={handleIncrement}
        >
          <FaPlus /> Increment
        </button>
        <button
          className={`counter-button ${buttonActive === 'decrement' ? 'button-active' : ''}`}
          onClick={handleDecrement}
        >
          <FaMinus /> Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
