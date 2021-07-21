import React from "react";
import ReminderItem from "./ReminderItem";

export default function ReminderList({ darkMode, allLists }) {

  return (
    <div className="overflow-hidden overflow-y-auto h-full">
      {allLists.map((list) => (
      <div key={list.key}>
        <ReminderItem
          key={list.key}
          title={list.title}
          amount={list.amount}
          color={list.color}
          darkMode={darkMode}
        />
      </div>
    ))}
    </div>
  );
}
