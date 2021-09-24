import React from "react";

export default function ColorPicker({ color, listColorHandler }) {
  return (
    <div
      className={`w-7 h-7 rounded-md bg-${color}-400 hover:opacity-50 opacity-100 cursor-pointer`}
      onClick={() => listColorHandler(color)}
    ></div>
  );
}
