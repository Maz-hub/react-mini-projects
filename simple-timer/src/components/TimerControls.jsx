import { useEffect, useRef } from "react";

const TimerControls = ({ isRunning, toggleTimer, resetTimer }) => {
  const startButtonRef = useRef(null);

  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, []);
  return (
    <>
      {/* Start & Pause button */}
      <button
        ref={startButtonRef}
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
    </>
  );
};

export default TimerControls;
