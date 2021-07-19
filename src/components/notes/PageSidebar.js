import React from "react";
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
      color: "red-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileText />,
      title: "Note 2",
      color: "yellow-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
        {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "blue-400",
    },
    {
      key: Math.random(),
      icon: <AiOutlineFileImage />,
      title: "Note 4",
      color: "red-400",
    },
  ];

  return (
    <div className={`w-full h-full text-white rounded-bl-2xl bg-primary-200 flex flex-col`}>
      <PageList allPages={allPages} />
      <div className="bottom-0 w-48 h-20 bg-primary-300 rounded-bl-2xl p-4">
        <button className="bg-accent-400 hover:bg-accent-300 rounded-full h-12 flex items-center w-full">
          <i><AiOutlineFileAdd className={"w-6 h-6 text-2xl m-2"} /></i>
          <p>New page</p>
        </button>
      </div>
    </div>
  );
}
