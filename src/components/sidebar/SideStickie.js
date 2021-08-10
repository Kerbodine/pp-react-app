import React from "react";

export default function SideStickie({ darkMode, title, content }) {
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="w-full mb-4 h-auto p-4 bg-primary-100 dark:bg-primary-800 rounded-2xl text-black dark:text-white">
        <h3 className="text-xl font-bold">{title}Title</h3>
        <p className="text-sm">
          {content}Consequat fugiat occaecat dolore tempor. Anim id qui ea
          mollit in sunt velit labore anim dolore non elit. Amet sunt laboris
          velit irure mollit nostrud aute commodo tempor est incididunt quis.
        </p>
      </div>
    </div>
  );
}
