import React from "react";

export default function NavbarItem({ icon, title, expanded }) {
  return (
    <div>
      <div className="flex items-center py-4 px-2 rounded transition cursor-pointer	">
        <i className="w-6 h-6 mr-4 cursor-pointer select-none text-2xl">
          {icon}
        </i>
        <span
          className={`transition-opacity ${
            expanded ? "flex items-center" : "opacity-0"
          }`}
        >
          {title}
        </span>
      </div>
    </div>
  );
}
