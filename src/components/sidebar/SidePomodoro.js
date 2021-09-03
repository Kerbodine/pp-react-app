import React, { useEffect, useContext } from "react";
import CountdownAnimation from "./CountdownAnimation";
import SetPomodoro from "./SetPomodoro";
import { SettingsContext } from "./SettingsContext";

import "./pomodoro.css";
import { BiCog } from "react-icons/bi";
import { SettingsConsumer } from "../settings/SettingsContext";

export default function SidePomodoro() {
  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn,
  } = useContext(SettingsContext);

  useEffect(() => {
    updateExecute(executing);
    return () => {};
  }, [executing, startAnimate]);

  return (
    <SettingsConsumer>
      {(settings) => {
        return (
          <div className={`${settings.sidebarPomodoro ? "visible" : "hidden"}`}>
            <div className="w-full h-[17.5rem] bg-primary-100 dark:bg-primary-800 rounded-2xl p-4">
              <div>
                {pomodoro !== 0 ? (
                  <div className="flex flex-col">
                    <ul className="list-none flex gap-2 justify-center mb-4">
                      <li>
                        <button
                          className={`${
                            executing.active === "work"
                              ? "!bg-accent-400 text-white"
                              : ""
                          } px-2 h-8 text-black dark:text-white flex items-center justify-center rounded-md bg-primary-200 dark:bg-primary-700 cursor-pointer`}
                          onClick={() => {
                            setCurrentTimer("work");
                          }}
                        >
                          Work
                        </button>
                      </li>
                      <li>
                        <button
                          className={`${
                            executing.active === "short"
                              ? "!bg-accent-400 text-white"
                              : ""
                          } px-2 h-8 text-black dark:text-white flex items-center justify-center rounded-md bg-primary-200 dark:bg-primary-700 cursor-pointer`}
                          onClick={() => {
                            setCurrentTimer("short");
                          }}
                        >
                          Short Break
                        </button>
                      </li>
                      <li>
                        <button
                          className={`w-8 h-8 text-lg text-black dark:text-white flex items-center justify-center rounded-md bg-primary-200 dark:bg-primary-700 cursor-pointer`}
                          onClick={SettingsBtn}
                        >
                          <BiCog />
                        </button>
                      </li>
                    </ul>
                    <div className="flex items-center justify-center">
                      <div className="flex items-center justify-center h-[9.5rem] w-[9.5rem] rounded-full text-white bg-primary-200 dark:bg-primary-700 text-4xl">
                        <CountdownAnimation
                          key={pomodoro}
                          timer={pomodoro}
                          animate={startAnimate}
                        >
                          {children}
                        </CountdownAnimation>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <div
                        className="w-16 h-8 rounded-md bg-primary-200 text-black dark:text-white hover:bg-accent-400 dark:hover:bg-accent-400 cursor-pointer hover:text-white dark:bg-primary-700 flex items-center justify-center"
                        onClick={startTimer}
                      >
                        Start
                      </div>
                      <div
                        className="w-16 h-8 rounded-md bg-primary-200 text-black dark:text-white hover:bg-accent-400 dark:hover:bg-accent-400 cursor-pointer hover:text-white dark:bg-primary-700 flex items-center justify-center"
                        onClick={pauseTimer}
                      >
                        Pause
                      </div>
                    </div>
                  </div>
                ) : (
                  <SetPomodoro />
                )}
              </div>
            </div>
          </div>
        );
      }}
    </SettingsConsumer>
  );
}
