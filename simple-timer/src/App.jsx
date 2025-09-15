import { useState, useRef } from "react";

function App() {
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
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-amber-100 rounded-lg shadow-lg text-center">
      <h2 className="text-4xl font-semibold mt-4"> Timer: {time}</h2>
      {/* Start & Pause button */}
      <button
        onClick={toggleTimer}
        className="mt-10 bg-amber-700 text-white px-4 py-2 rounded cursor-pointer hover:bg-amber-600"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
    </div>
  );
}

export default App;
