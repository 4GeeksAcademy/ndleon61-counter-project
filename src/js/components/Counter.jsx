import React from 'react';
import '../../styles/index.css'; // Make sure this path matches your structure

const Counter = ({ seconds }) => {
  return (
    <div className="counter-container">
      <div className="counter-text">
        <i class="fa-solid fa-clock"></i>
        {seconds.toString().padStart(4, '0')}
      </div>
    </div>
  );
};

export default Counter;