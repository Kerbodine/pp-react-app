// import { BiMenu } from "react-icons/bi";
import { BiDotsVerticalRounded, BiCalendar, BiCalendarEvent, BiPin, BiNote } from "react-icons/bi";
import { IconContext } from "react-icons";
import Calendar from 'react-calendar';
import NavbarTitle from "../navbar/NavbarTitle";
import SideItem from "./SideItem";
import SideWidget from "./SideWidget";
import SideNote from "./SideNote";

export default function SidePanel({ isSideExpanded, toggleSidePanelHandler }) {

  return (
    <ul
      className={`overflow-y-auto overflow-hidden list-none fixed top-0 right-0 bottom-0 flex flex-col h-full bg-gray-700 text-white transition-width z-10 ${
        isSideExpanded ? " w-72 " : "w-14"}`}>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="fixed w-full bg-gray-700 h-20 z-10">
          <div className="">
          <NavbarTitle
            icon={<BiDotsVerticalRounded />}
            click={toggleSidePanelHandler}
            title="Widgets"
            expanded={isSideExpanded}
          />
          </div>
          <hr
            className={`h-0.5 bg-white transition-width mx-4 ${
              isSideExpanded ? "w-64" : "w-6"
            }`} />
        </div>

        <li className="mx-4 mt-24">
          <i className={`text-2xl ${isSideExpanded ? "hidden" : "visible"}`}><BiCalendar /></i>
          <p className={`mb-2 ${isSideExpanded ? "visible" : "hidden"}`}>Calendar:</p>
          <Calendar className={`transition-opacity ${isSideExpanded ? "visible" : "hidden"}`}/>
        </li>
        <li className="mx-4 mt-4">
          <i className={`text-2xl ${isSideExpanded ? "hidden" : "visible"}`}><BiCalendarEvent /></i>
          <p className={`${isSideExpanded ? "visible" : "hidden"}`}>Upcoming events:</p>
        </li>
        <li className="flex gap-4 mx-4">
          <SideWidget isSideExpanded={isSideExpanded} eventName="Test event" countdown="6" timeUnit="days"/>
          <SideWidget isSideExpanded={isSideExpanded} eventName="Test event 2" countdown="11" timeUnit="days"/>
        </li>
        <li className="mx-4 mt-4">
          <p className={`${isSideExpanded ? "visible" : "hidden"}`}>Pinned tasks:</p>
          <i className={`text-2xl ${isSideExpanded ? "hidden" : "visible"}`}><BiPin /></i>
          <div className={`${isSideExpanded ? "visible" : "hidden"}`}>
            <SideItem color="#ffee00" taskName="Task 1"/>
            <SideItem color="#ccffdd" taskName="Task 2"/>
            <SideItem color="#1fde53" taskName="Task 3"/>
          </div>
        </li>
        <li className="mx-4 mt-4">
          <i className={`text-2xl ${isSideExpanded ? "hidden" : "visible"}`}><BiNote /></i>
          <p className={`mb-2 ${isSideExpanded ? "visible" : "hidden"}`}>Stickies:</p>
          <SideNote isSideExpanded={isSideExpanded}/>
        </li>
      </IconContext.Provider>
    </ul>
  );
}
