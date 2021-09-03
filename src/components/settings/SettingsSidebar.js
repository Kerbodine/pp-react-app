import React from "react";

export default function SettingsSidebar() {
  return (
    <div
      className={`flex flex-col h-full cursor-pointer text-black dark:text-white`}
    >
      <div className="w-full h-12 bg-primary-300 dark:bg-primary-600 flex items-end px-4">
        <h2 className="mb-0.5 text-lg font-bold">SETTINGS</h2>
      </div>
      <div className="flex mt-4 mx-4"></div>
    </div>
  );
}
