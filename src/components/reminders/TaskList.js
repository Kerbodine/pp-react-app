import React from "react";
import { v4 as uuidv4 } from "uuid";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const allTasks = [
    {
      key: uuidv4(),
      title: "Task 1",
      completed: false,
      color: "red-400",
      dueDate: "dd/mm/yyyy",
    },
    {
      key: uuidv4(),
      title: "Task 2",
      completed: false,
      color: "yellow-400",
      dueDate: "dd/mm/yyyy",
    },
    {
      key: uuidv4(),
      title: "Task 3",
      completed: false,
      color: "green-400",
      dueDate: "dd/mm/yyyy",
    },
    {
      key: uuidv4(),
      title: "Task 3",
      completed: false,
      color: "pink-400",
      dueDate: "dd/mm/yyyy",
    },
    {
      key: uuidv4(),
      title: "Task 3",
      completed: false,
      color: "yellow-400",
      dueDate: "dd/mm/yyyy",
    },
    {
      key: uuidv4(),
      title: "Task 3",
      completed: false,
      color: "purple-400",
      dueDate: "dd/mm/yyyy",
    },
    {
      key: uuidv4(),
      title: "Task 3",
      completed: false,
      color: "red-400",
      dueDate: "dd/mm/yyyy",
    },
    {
      key: uuidv4(),
      title: "Task 3",
      completed: false,
      color: "green-400",
      dueDate: "dd/mm/yyyy",
    },
  ];

  return (
    <div className="overflow-y-auto no-scrollbar h-full flex flex-col gap-2 pb-16">
      {allTasks.map((page) => (
        <div key={page.key}>
          <TaskItem
            title={page.title}
            completed={page.completed}
            color={page.color}
            dueDate={page.dueDate}
          />
        </div>
      ))}
    </div>
  );
}
