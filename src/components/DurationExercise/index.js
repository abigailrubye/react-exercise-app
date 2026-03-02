import { useState, useEffect } from "react";

function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer = null;

    if (running) {
      timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  const formatTime = () => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{formatTime()}</p>

      <button onClick={() => setRunning(true)}>
        Start
      </button>

      <button onClick={() => {
        setRunning(false);
        setSeconds(0);
      }}>
        Reset
      </button>
    </div>
  );
}

export default DurationExercise;
