import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "./SettingsContext";
const CountdownAnimation = ({ key, timer, animate, children }) => {
  const { stopAnimate } = useContext(SettingsContext);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={[
        ["#3b82f6", 0.33],
        ["#3b82f6", 0.33],
        ["#3b82f6", 0.33],
      ]}
      strokeWidth={8}
      size={140}
      trailColor="#b0b5bf"
      onComplete={() => {
        stopAnimate();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
