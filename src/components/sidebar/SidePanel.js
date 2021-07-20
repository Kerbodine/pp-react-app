import Calendar from 'react-calendar';
import SideItem from "./SideItem";
import SideWidget from "./SideWidget";
import SideStickie from "./SideStickie";
import SideGreeting from './SideGreeting';

import "./calendar.css"

import { BiSearch, BiAdjust } from "react-icons/bi";

export default function SidePanel() {

  return (
    <div className="w-72 h-screen">
      <div className="flex gap-4 h-20 bg-primary-800 px-4">
        <div className="w-48 flex items-center h-12 bg-primary-700 rounded-2xl my-auto px-3">
          <div className="text-2xl text-white mr-2"><BiSearch /></div>
          <input className="bg-transparent text-white outline-none" placeholder="Search..." aria-label="search"></input>
        </div>
        <div className="w-12 h-12 bg-primary-700 hover:bg-accent-400 my-auto rounded-2xl transition-colors flex items-center">
          <div className="text-2xl text-white mx-auto" onClick={onclick}>
            <BiAdjust />
          </div>
        </div>
      </div>
      <div className="h-full bg-primary-800 overflow-y-auto overflow-hidden no-scrollbar px-4 flex flex-col gap-4 text-white">
        <div>
          <SideGreeting />
        </div>
          <Calendar calendarType="US" />
        <div className="flex gap-4">
          <SideWidget eventName="Test event" countdown="6" timeUnit="days"/>
          <SideWidget eventName="Test event 2" countdown="11" timeUnit="days"/>
        </div>
        <div className="flex flex-col gap-4">
          <SideItem taskName="Task 1" dueDate="dd/mm/yyyy"/>
          <SideItem taskName="Task 2" dueDate="dd/mm/yyyy"/>
          <SideItem taskName="Task 3" dueDate="dd/mm/yyyy"/>
        </div>
        <SideStickie />
      </div>
    </div>
  );
}
