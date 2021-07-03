import React from "react";

import { BsCircleFill } from "react-icons/bs";

export default function PageItem({ icon, title, color }) {
  return (
    <div className="w-full bg-primary-600 h-10 flex items-center">
      <i className="w-6 h-6 text-xl m-2">{icon}</i>
      <p className="text-primary-300 text-sm">{title}</p>
      <i className={`relative m-4 w10 ${color} flex-auto mt-0`}>
        <BsCircleFill className="absolute right-0"/>
      </i>
    </div>
  );
}
