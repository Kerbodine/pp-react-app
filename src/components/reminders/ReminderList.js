import React from "react";
import ReminderItem from "./ReminderItem";

export default function ReminderList({ allLists }) {

  return (
    <div className="overflow-hidden overflow-y-scroll h-full">
      {allLists.map((list) => (
      <div key={list.key}>
        <ReminderItem
          key={list.key}
          title={list.title}
          amount={list.amount}
          color={list.color}
        />
      </div>
    ))}
    </div>
  );
}
