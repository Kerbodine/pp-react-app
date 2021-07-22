import React from "react";
import { useLocation } from 'react-router-dom'

export default function NavbarItem({ darkMode, icon, path, onClick }) {

  const location = useLocation();
  let active = false;
  
  if (location.pathname === path) {
    active = true;
  } else {
    active = false;
  }

  return (
    <div className={`${ darkMode ? "dark" : "" } h-12 px-4 flex items-center text-2xl cursor-pointer select-none`} onClick={onClick}>
      <div className={`flex items-center w-full h-full ${ active ? "bg-accent-400 text-white" : "bg-primary-200 dark:bg-primary-700"} hover:bg-accent-400 dark:hover:bg-accent-400 hover:text-white transition-colors rounded-2xl`}>
        <div className="mx-auto">
          {icon}
        </div>
      </div>
    </div>
  );
}
