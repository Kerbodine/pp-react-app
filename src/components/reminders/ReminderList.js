import React from "react";
import ReminderItem from "./ReminderItem";

export default function ReminderList({ darkMode, allLists, selectList }) {
  return (
    <div className="overflow-hidden overflow-y-auto h-full">
      {allLists.map((list) => (
        <div key={list.id}>
          <ReminderItem
            id={list.id}
            title={list.title}
            amount={Object.keys(list.tasks).length}
            color={list.color}
            icon={list.icon}
            darkMode={darkMode}
            selectList={selectList}
          />
        </div>
      ))}
    </div>
  );
}
