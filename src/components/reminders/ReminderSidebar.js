import React from 'react'
import ReminderList from './ReminderList'
import { v4 as uuidv4 } from "uuid";
import { BiListPlus } from "react-icons/bi";

export default function ReminderSidebar() {

  const allLists = [
    {
      key: uuidv4(),
      title: "Note 1",
      amount: "10",
      color: "bg-red-400",
    },
    {
      key: uuidv4(),
      title: "Note 2",
      amount: "10",
      color: "bg-yellow-400",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      amount: "10",
      color: "bg-red-400",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      amount: "10",
      color: "bg-red-400",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      amount: "10",
      color: "bg-red-400",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      amount: "10",
      color: "bg-red-400",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      amount: "10",
      color: "bg-red-400",
    },
    {
      key: uuidv4(),
      title: "Note 3",
      amount: "10",
      color: "bg-red-400",
    },
  ];

  return (
    <div className={`rounded-bl-2xl z-10 flex flex-col`}>
      <div className="h-[calc(100vh-208px)]">
        <ReminderList allLists={allLists} />
      </div>
      <div className="w-48 h-20 bg-primary-300 rounded-bl-2xl p-4">
        <button className="bg-accent-400 hover:bg-accent-300 rounded-full h-12 flex items-center w-full">
          <i><BiListPlus className={"w-6 h-6 text-2xl m-2"} /></i>
          <p>New list</p>
        </button>
      </div>
    </div>
  )
}
