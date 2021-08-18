import React, { useState, useEffect } from "react";
import { BiInfoCircle } from "react-icons/bi";

export default function PomodoroAlert({ timerComplete }) {
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    if (timerComplete) {
      setBannerVisible(true);
    }
    const banner = setTimeout(() => {
      setBannerVisible(false);
    }, 2500);
    return () => {
      clearTimeout(banner);
    };
  }, [timerComplete]);

  return (
    <div
      className={`absolute inset-x-1/2 transition-transform duration-500 w-[200px] -top-12 h-12 bg-white shadow-md dark:bg-primary-700 rounded-md flex justify-center items-center px-3 py-2 gap-2 text-black dark:text-white ${
        bannerVisible ? "translate-y-[5.5rem]" : ""
      }`}
    >
      <div className="text-2xl">
        <BiInfoCircle />
      </div>
      <h3 className="leading-4">Your pomodoro session is done!</h3>
    </div>
  );
}
