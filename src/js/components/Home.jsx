import React, { useState, useEffect } from "react";
import './home.css';


const Home = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

   const clearTimer = () =>{
      setSeconds(0)
    };

  return (
    <div>
      <div className="container">
        <div className="timer">
           {seconds.toString().padStart(4, '0')}
        </div>
        <input type="text" placeholder="Enter a number" />
        <button id="startBtn">Start</button>
        <button onClick = {clearTimer} >Clear</button>
      </div>
      
     
    </div>
  );
};

export default Home;