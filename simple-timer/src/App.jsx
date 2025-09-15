import { useState, useRef } from "react";

function App() {
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  return <>My App</>;
}

export default App;
