import { useState } from 'react';

const useVisualMode = (init) => {
  const [mode, setMode] = useState(init);
  const [history, setHistory] = useState([init]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      return setMode(newMode);
    }
    setHistory((prev) => [...prev, newMode]);
    return setMode(newMode);
  };

  const back = () => {
    if (history.length <= 1) {
      return setMode(mode);
    }
    setHistory((prev) => prev.slice(0, -1));
    const prevItem = history.slice(-2, -1);
    return setMode(...prevItem);
  };

  return { mode, transition, back };
};

export default useVisualMode;
