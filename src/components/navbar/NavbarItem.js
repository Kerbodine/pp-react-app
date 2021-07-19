import React from "react";
import { useLocation } from 'react-router-dom'

export default function NavbarItem({ icon, path }) {

  const location = useLocation();
  let active = false;
  
  if (location.pathname === path) {
    active = true;
  } else {
    active = false;
  }

  return (
    <div className="flex items-center px-4 h-12 cursor-pointer select-none text-2xl">
      <div className={`flex items-center w-full h-full ${ active ? "bg-accent-400" : "bg-primary-700"} hover:bg-accent-400 transition-colors rounded-2xl`}>
        <div className="mx-auto">
          {icon}
        </div>
      </div>
    </div>
  );
}
