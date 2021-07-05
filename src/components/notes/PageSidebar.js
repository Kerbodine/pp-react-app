import React from "react";

import { BiSearch } from "react-icons/bi";
import {
  AiOutlineFileExclamation,
  AiOutlineFileText,
  AiOutlineFileImage,
  AiOutlineFileAdd
} from "react-icons/ai";

import PageList from "./PageList";

export default function PageSidebar() {
  const allPages = [
    {
      key: Math.random(),
      icon: <AiOutlineFileExclamation />,
      title: "Note 1",
      color: "text-red-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileText />,
      title: "Note 2",
      color: "text-yellow-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
        {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 4",
      color: "text-red-400",
    },
  ];

  return (
    <div className={`fixed top-0 bottom-0 h-full text-white bg-primary-700 w-48 flex flex-col`}>
      <div
        className={
          "bg-primary-600 m-4 w-40 h-10 rounded-md flex items-center z-10"}>
        <i>
          <BiSearch className={"w-6 h-6 text-2xl m-2"} />
        </i>
        <input
          type="text"
          placeholder="Search..."
          className={"bg-transparent w-28 text-white text-sm outline-none"}
        />
      </div>
      <PageList allPages={allPages} />
      <div className="bottom-0 w-48 h-20 bg-primary-700 p-4">
        <button className="bg-primary-600 hover:bg-primary-500 rounded-md h-12 flex items-center w-full">
          <i>
            <AiOutlineFileAdd className={"w-6 h-6 text-2xl m-2"} />
          </i>
          <p>New page</p>
        </button>
      </div>
    </div>
  );
}
