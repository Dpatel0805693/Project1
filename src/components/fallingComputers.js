import React from 'react';
import './fallingComputers.css'; 

const FallingComputer = ({ left, animationDuration }) => {
  return (
    <div className="falling-computer" style={{ left: `${left}%`, animationDuration: `${animationDuration}s` }}>
      💻
    </div>
  );
};

export default FallingComputer;
