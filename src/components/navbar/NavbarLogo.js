import React from "react";

export default function NavbarLogo({ icon }) {
  return (
    <div
      className={`h-12 px-4 flex items-center text-2xl cursor-pointer select-none`}
    >
      <div
        className={`flex items-center shadow-light w-full h-full bg-gray-200 dark:bg-primary-700 rounded-2xl`}
      >
        <div className="mx-auto">{icon}</div>
      </div>
    </div>
  );
}
