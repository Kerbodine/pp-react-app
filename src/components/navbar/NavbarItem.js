import React from "react";

export default function NavbarItem({ icon }) {
  return (
    <div className="flex items-center px-4 h-12 cursor-pointer select-none text-2xl">
      <div className="flex items-center w-full h-full bg-primary-600 hover:bg-accent-400 transition-colors rounded-2xl">
        <div className="mx-auto">
          {icon}
        </div>
      </div>
    </div>
  );
}
