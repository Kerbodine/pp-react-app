import React from "react";
import ReminderList from "./ReminderList";
import { v4 as uuidv4 } from "uuid";
import { BiListPlus } from "react-icons/bi";
import { BiListUl } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import { BiCalendarExclamation } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import { BiArchive } from "react-icons/bi";

export default function ReminderSidebar({ darkMode }) {
  const allLists = [
    {
      key: uuidv4(),
      title: "Reminder List 1",
      amount: "10",
      color: "bg-red-400",
      icon: <BiListUl />,
    },
    {
      key: uuidv4(),
      title: "Reminder List 2",
      amount: "10",
      color: "bg-yellow-400",
      icon: <BiListUl />,
    },
    {
      key: uuidv4(),
      title: "Reminder List 3",
      amount: "10",
      color: "bg-red-400",
      icon: <BiListUl />,
    },
    {
      key: uuidv4(),
      title: "Reminder List 3",
      amount: "10",
      color: "bg-red-400",
      icon: <BiListUl />,
    },
    {
      key: uuidv4(),
      title: "Reminder List 3",
      amount: "10",
      color: "bg-red-400",
      icon: <BiListUl />,
    },
    {
      key: uuidv4(),
      title: "Reminder List 3",
      amount: "10",
      color: "bg-red-400",
      icon: <BiListUl />,
    },
    {
      key: uuidv4(),
      title: "Reminder List 3",
      amount: "10",
      color: "bg-red-400",
      icon: <BiListUl />,
    },
    {
      key: uuidv4(),
      title: "Reminder List asd sad s3",
      amount: "10",
      color: "bg-red-400",
      icon: <BiListUl />,
    },
  ];

  const categories = [
    {
      key: uuidv4(),
      title: "Today",
      amount: "10",
      color: "bg-blue-400",
      icon: <BiSun />,
    },
    {
      key: uuidv4(),
      title: "Priority",
      amount: "10",
      color: "bg-red-400",
      icon: <BiCalendarExclamation />,
    },
    {
      key: uuidv4(),
      title: "Starred",
      amount: "10",
      color: "bg-yellow-400",
      icon: <BiStar />,
    },
    {
      key: uuidv4(),
      title: "All",
      amount: "10",
      color: "bg-green-400",
      icon: <BiArchive />,
    },
  ];

  return (
    <div className={`${darkMode ? "dark" : ""} flex flex-col h-full`}>
      <div className="w-full font-bold mt-4 ml-4">CATEGORIES:</div>
      <hr className="border-none h-0.5 bg-gray-300 mx-4 my-2" />
      <div className="">
        <ReminderList allLists={categories} darkMode={darkMode} />
      </div>
      <div className="w-full font-bold mt-4 ml-4">MY LISTS:</div>
      <hr className="border-none h-0.5 bg-gray-300 mx-4 my-2" />
      <div className="flex-auto min-h-0">
        <ReminderList allLists={allLists} darkMode={darkMode} />
      </div>
      <hr className="border-none h-0.5 bg-gray-300" />
      <button className="h-12 flex-shrink-0 hover:bg-primary-300 transition-colors dark:bg-primary-700 text-black dark:text-white flex items-center text-lg">
        <i className="text-2xl ml-4 mr-2">
          <BiListPlus />
        </i>
        <h2>New List</h2>
      </button>
    </div>
  );
}
