import React from "react";
import { useLocation } from "react-router-dom";

export default function NavbarItem({ icon, path }) {
  const location = useLocation();

  let active = false;
  "/" + location.pathname.split("/")[1] === path
    ? (active = true)
    : (active = false);

  return (
    <div
      className={`h-12 px-4 flex items-center text-2xl cursor-pointer select-none`}
    >
      <div
        className={`flex items-center w-full h-full ${
          active
            ? "bg-accent-400 text-white"
            : "bg-primary-100 dark:bg-primary-800"
        }  hover:bg-accent-400 dark:hover:bg-accent-400 hover:text-white rounded-2xl`}
      >
        <div className="mx-auto">{icon}</div>
      </div>
    </div>
  );
}
