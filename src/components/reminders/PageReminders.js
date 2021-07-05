import React from 'react'
import { BiSearch, BiCalendarAlt, BiCalendarExclamation, BiCalendarPlus, BiCalendarStar } from "react-icons/bi";
import ReminderWidget from './ReminderWidget';
import ReminderItem from './ReminderItem';

export default function PageReminders() {

  return (
    <div className={`bg-primary-700 fixed top-0 bottom-0 h-full text-white p-4 xl:w-96 lg:w-72 md:w-56 w-48 flex flex-col`}>
      <div
        className={
          "bg-primary-500 w-88 h-10 rounded items-center flex my-2"}>
        <i><BiSearch className={"w-6 h-6 text-2xl m-2"} /></i>
        <input
          type="text"
          placeholder="Search..."
          className={"bg-transparent w-64 text-white text-sm outline-none"}
        />        
      </div>
      <p className="text-primary-100 font-semibold text-lg">Overview:</p>
      <div className="text-primary-100 flex flex flex-wrap flex-row xl:gap-4 gap-2 my-2">
        <ReminderWidget icon={<BiCalendarAlt/>} title="Today" />
        <ReminderWidget icon={<BiCalendarExclamation/>} title="Priority" />
        <ReminderWidget icon={<BiCalendarStar/>} title="Starred" />
        <ReminderWidget icon={<BiCalendarPlus/>} title="All" />
      </div>
      <p className="text-primary-100 font-semibold text-lg">My Lists:</p>
      <ul className="mt-2 h-full overflow-y-auto overflow-hidden list-none text-primary-100">
        <li><ReminderItem title="List 1" amount="3"/></li>
        <li><ReminderItem title="List 2" amount="5"/></li>
        <li><ReminderItem title="List 3" amount="2"/></li>
        <li><ReminderItem title="List 4" amount="1"/></li>
        <li><ReminderItem title="List 5" amount="0"/></li>
        <li><ReminderItem title="List 6" amount="2"/></li>
      </ul>
    </div>
  )
}
