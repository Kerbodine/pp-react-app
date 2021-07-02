import React from 'react'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { BiSearch } from "react-icons/bi";

export default function PageCalendar() {
  return (
    <div className={`bg-gray-700 fixed top-0 bottom-0 h-full text-white p-8 w-96 flex flex-col`}>
      <div
        className={
          "bg-gray-500 w-88 h-10 rounded items-center flex"}>
        <i>
          <BiSearch className={"w-6 h-6 text-2xl m-2"} />
        </i>
        <input
          type="text"
          placeholder="Search..."
          className={"bg-transparent w-64 text-white text-sm outline-none"}
        />        
      </div>
      <div className="h-8"></div>
      <Calendar className="text-black"/>
    </div>
  )
}
