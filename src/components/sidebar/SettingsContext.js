import { useState, createContext } from "react";

export const SettingsContext = createContext();

function SettingsContextProvider(props) {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state,
    });
    setTimerTime(executing);
  }

  // start animation fn
  function startTimer() {
    setStartAnimate(true);
  }
  // pause animation fn
  function pauseTimer() {
    setStartAnimate(false);
  }
  // pass time to counter
  const children = ({ remainingTime }) => {
    return new Date(remainingTime * 1000).toISOString().substr(14, 5);
  };

  // clear session storage
  const SettingsBtn = () => {
    setExecuting({});
    setPomodoro(0);
  };

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  };

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case "work":
        setPomodoro(evaluate.work);
        break;
      case "short":
        setPomodoro(evaluate.short);
        break;
      case "long":
        setPomodoro(evaluate.long);
        break;
      default:
        setPomodoro(0);
        break;
    }
  };

  function stopAnimate() {
    setStartAnimate(false);
    props.setTimerComplete(true);
  }

  return (
    <SettingsContext.Provider
      value={{
        pomodoro,
        executing,
        updateExecute,
        startAnimate,
        startTimer,
        pauseTimer,
        children,
        SettingsBtn,
        setCurrentTimer,
        stopAnimate,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsContextProvider;
