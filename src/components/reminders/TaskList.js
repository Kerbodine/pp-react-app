import React from 'react'
import { v4 as uuidv4 } from "uuid";
import TaskItem from './TaskItem';

export default function TaskList({ reminders }) {

  const allTasks = [
    {
      key: uuidv4(),
      title: "Note 1",
      completed: false,
      color: "bg-red-400",
      dueDate: "dd/mm/yyyy",
    },
    {
      key: uuidv4(),
      title: "Note 2",
      completed: false,
      color: "bg-yellow-400",
      dueDate: "dd/mm/yyyy",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      completed: false,
      color: "bg-green-400",
      dueDate: "dd/mm/yyyy",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      completed: false,
      color: "bg-pink-400",
      dueDate: "dd/mm/yyyy",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      completed: false,
      color: "bg-yellow-400",
      dueDate: "dd/mm/yyyy",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      completed: false,
      color: "bg-purple-400",
      dueDate: "dd/mm/yyyy",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      completed: false,
      color: "bg-red-400",
      dueDate: "dd/mm/yyyy",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      completed: false,
      color: "bg-green-400",
      dueDate: "dd/mm/yyyy",
    },
  ];

  return (
    <div className="overflow-y-auto no-scrollbar h-full flex flex-col gap-2 pb-16">
      {reminders.map((page) => (
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
  )
}
