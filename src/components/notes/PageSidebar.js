import React from "react";
import {
  AiOutlineFileExclamation,
  AiOutlineFileText,
  AiOutlineFileImage,
  AiOutlineFileAdd
} from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import PageList from "./PageList";

export default function PageSidebar() {
  const allPages = [
    {
      key: uuidv4(),
      icon: <AiOutlineFileExclamation />,
      title: "Note 1",
      color: "bg-red-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileText />,
      title: "Note 2",
      color: "bg-yellow-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
        {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "bg-blue-400",
    },
    {
      key: uuidv4(),
      icon: <AiOutlineFileImage />,
      title: "Note 4",
      color: "bg-red-400",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="h-10 flex-shrink-0 bg-primary-300 flex items-center px-4 font-bold text-lg">
        <h2>All Documents</h2>
      </div>
      <div className="flex-auto min-h-0">
        <PageList allPages={allPages} />
      </div>
      <div className="w-48 h-20 bg-primary-300 p-4">
        <button className="bg-accent-400 hover:bg-accent-300 rounded-full h-12 flex items-center w-full text-white">
          <i><AiOutlineFileAdd className={"w-6 h-6 text-2xl m-2"} /></i>
          <h2>New page</h2>
        </button>
      </div>
    </div>
  );
}
