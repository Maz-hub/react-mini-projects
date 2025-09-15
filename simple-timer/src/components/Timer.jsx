import { useState, useRef } from "react";
import TimerDisplay from "./TimerDisplay.jsx";

function Timer() {
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    // Check to see if it's running ?
    if (isRunning) {
      // Clear the interval to stop the timer
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      // Start the timer
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    setIsRunning(!isRunning);
  };

  // Reset Timer
  const resetTimer = () => {
    clearInterval(timerRef.current); // stop the timer
    setIsRunning(false);
    setTime(0);
    timerRef.current = null; // reset
  };

  return (
    <div>
      <TimerDisplay time={time} />
      {/* Start & Pause button */}
      <button
        onClick={toggleTimer}
        className="mt-10 bg-amber-700 text-white px-4 py-2 mr-5 rounded cursor-pointer hover:bg-amber-600"
      >
        {isRunning ? "Pause" : "Start"}
      </button>

      {/* Reset button */}
      <button
        onClick={resetTimer}
        className="mt-10 bg-amber-950 text-white px-4 py-2 rounded cursor-pointer hover:bg-amber-900"
      >
        Reset
      </button>
    </div>
  );
}

export default Timer;
