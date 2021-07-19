import React from "react";

import { BsCircleFill } from "react-icons/bs";

export default function PageItem({ icon, title, color }) {
  return (
    <div className="w-full hover:bg-white bg-primary-200 h-12 flex items-center">
      <div className={`w-2 h-full bg-${color}`}></div>
      <i className="text-xl text-black m-2">{icon}</i>
      <p className="text-black text">{title}</p>
      <i className={`relative m-4 w10 text-${color} flex-auto mt-0`}>
        <BsCircleFill className="absolute right-0"/>
      </i>
    </div>
  );
}
