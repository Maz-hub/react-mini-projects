import { useState, useRef } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

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
      <TimerControls
        isRunning={isRunning}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
}

export default Timer;
