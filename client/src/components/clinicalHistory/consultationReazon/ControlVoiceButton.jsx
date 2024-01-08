import React from "react";



const StartButton = ({ onClick }) => (
  <button onClick={onClick} className="mic-button-start">
    Empezar
  </button>
);

const StopButton = ({ onClick }) => (
  <button onClick={onClick} className="mic-button-stop">
    Parar 
  </button>
);

export { StartButton, StopButton };
