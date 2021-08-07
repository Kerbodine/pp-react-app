import React from "react";

export default function PageItem({ icon, title, color }) {
  return (
    <div className="w-full hover:bg-primary-100 bg-primary-200 h-10 flex items-center">
      <div className={`w-2 h-full ${color}`}></div>
      <i className="text-2xl text-black mx-2">{icon}</i>
      <p className="text-black text">{title}</p>
    </div>
  );
}
