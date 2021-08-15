import React from "react";

export default function SideItem({ taskName, color, type, dueDate }) {
  return (
    <div className="bg-primary-100 dark:bg-primary-800 w-auto rounded-2xl overflow-hidden flex px-4">
      <div className="my-2">
        <p className="">{taskName}</p>
        <p className="text-primary-500">{dueDate}</p>
      </div>
    </div>
  );
}
