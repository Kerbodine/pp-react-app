import React from "react";

import { BsCircleFill } from "react-icons/bs";

export default function PageItem({ icon, title, color }) {
  return (
    <div className="w-full bg-gray-600 h-14 flex items-center">
      <i className="w-6 h-6 text-2xl m-2">{icon}</i>
      <p className="text-gray-300">{title}</p>
      <i className={`absolute right-0 m-4 ${color}`}>
        <BsCircleFill />
      </i>
    </div>
  );
}
