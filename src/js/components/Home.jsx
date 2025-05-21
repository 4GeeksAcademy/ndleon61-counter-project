import React, { useState, useEffect } from "react";
import './home.css';

const Home = () => {
  const [seconds, setSeconds] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const clearTimer = () => {
    setSeconds(0);
    setInputValue("");
  };

  const startFromInput = () => {
    const num = parseInt(inputValue);
    if (!isNaN(num)) {
      setSeconds(num);
    } else {
      alert("Please enter a valid number");
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Counter Project</h1>
        <h4><i class="fa-brands fa-react"></i> Using React Hooks</h4>
        <div className="timer">
          {seconds.toString().padStart(4, '0')}
        </div>
        <input
        id="value"
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter starting value"
      />
      <button onClick={startFromInput} id="startBtn">Start from Input</button>
      <button onClick={clearTimer} id="clearBtn">Clear Timer</button>
      </div>
      
    </div>
  );
};

export default Home;