import React from "react";

export default function TagItem({ title, color }) {
  return (
    <div
      className={`h-auto w-min rounded-full py-0.5 px-2 cursor-pointer ${color} flex items-center`}
    >
      <p className="text-white">{title}</p>
    </div>
  );
}
