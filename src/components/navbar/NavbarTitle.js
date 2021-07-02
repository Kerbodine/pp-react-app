import React from "react";

export default function NavbarTitle({ icon, title, click, expanded }) {
  return (
    <div>
      <div className="flex items-center p-4">
        <i
          className={"w-6 h-8 mr-4 mt-2 cursor-pointer select-none	text-2xl"}
          onClick={click}
        >
          {icon}
        </i>
        <h1
          className={`transition-opacity font-bold ${
            expanded ? "" : "opacity-0"
          }`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
