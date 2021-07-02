import React from "react";

import { BiSearch } from "react-icons/bi";
import {
  AiOutlineFileExclamation,
  AiOutlineFileText,
  AiOutlineFileImage,
} from "react-icons/ai";

import PageList from "./PageList";

export default function PageSidebar() {
  const allPages = [
    {
      key: "1",
      icon: <AiOutlineFileExclamation />,
      title: "Note 1",
      color: "text-red-400",
    },
    {
      key: "2",
      icon: <AiOutlineFileText />,
      title: "Note 2",
      color: "text-yellow-400",
    },
    {
      key: "3",
      icon: <AiOutlineFileImage />,
      title: "Note 3",
      color: "text-blue-400",
    },
  ];

  return (
    <div className={`fixed top-0 bottom-0 h-full bg-gray-700 text-white w-48`}>
      <div
        className={
          "absolute bg-gray-500 m-4 w-40 h-10 rounded flex items-center"
        }
      >
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
    </div>
  );
}
