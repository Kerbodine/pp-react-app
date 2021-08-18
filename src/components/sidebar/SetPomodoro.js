import React, { useContext, useState } from "react";
import { SettingsContext } from "./SettingsContext";

const SetPomodoro = () => {
  const [newTimer, setNewTimer] = useState({
    work: 25,
    short: 5,
    long: 15,
    active: "work",
  });

  const { updateExecute } = useContext(SettingsContext);

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };
  return (
    <div className="w-full h-full text-center bg-green-200">
      <form noValidate onSubmit={handleSubmit}>
        <button
          className="w-20 h-8 rounded-md bg-primary-200 dark:bg-primary-700 text-black dark:text-white hover:bg-accent-400 hover:text-white dark:hover:bg-accent-400"
          type="submit"
        >
          Set Timer
        </button>
        <div className="flex gap-4 justify-center mt-4">
          <input
            className="w-16 h-16 outline-none rounded-full border-4 flex items-center text-center text-lg border-accent-400 bg-red-200 text-black dark:text-white bg-primary-200 dark:bg-primary-700"
            type="number"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            className="w-16 h-16 outline-none rounded-full border-4 flex items-center text-center text-lg border-accent-400 bg-red-200 text-black dark:text-white bg-primary-200 dark:bg-primary-700"
            type="number"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            className="w-16 h-16 outline-none rounded-full border-4 flex items-center text-center text-lg border-accent-400 bg-red-200 text-black dark:text-white bg-primary-200 dark:bg-primary-700"
            type="number"
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
      </form>
    </div>
  );
};

export default SetPomodoro;
