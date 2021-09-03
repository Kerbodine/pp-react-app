import React from "react";

export default function SettingsLine({ title, caption, onClick, condition }) {
  return (
    <div className="flex mb-1">
      <p className="text-primary-500 dark:text-primary-400">{caption}</p>
      <button
        className="ml-auto w-10 h-6 bg-accent-400 rounded-full flex items-center justify-center px-1"
        onClick={onClick}
      >
        <div
          className={`w-4 h-4 rounded-full bg-white transition-transform ${
            condition ? "-translate-x-2" : "translate-x-2"
          }`}
        ></div>
      </button>
    </div>
  );
}
