import React from "react";

export default function ReminderColorPicker({ color, listColorHandler }) {
  return (
    <div
      className={`w-6 h-6 rounded-md bg-${color}-400 hover:bg-${color}-400/80`}
      onClick={() => listColorHandler(color)}
    ></div>
  );
}
