// import { BiMenu } from "react-icons/bi";
import Calendar from 'react-calendar';
import SideItem from "./SideItem";
import SideWidget from "./SideWidget";
import SideStickie from "./SideStickie";

export default function SidePanel() {

  return (
    <div className="w-72 h-screen">
      <div className="flex h-20 bg-primary-800 px-4">
        <div className="flex-auto h-12 bg-primary-600 mr-4 rounded-full my-auto"></div>
        <div className="w-12 h-12 bg-primary-600 hover:bg-accent-400 my-auto rounded-full transition-colors"></div>
      </div>
      <div className="h-full bg-primary-800 overflow-y-auto overflow-hidden no-scrollbar px-4 flex flex-col gap-4 text-white">
        <div>
          <Calendar />
        </div>
        <div className="flex gap-4">
          <SideWidget eventName="Test event" countdown="6" timeUnit="days"/>
          <SideWidget eventName="Test event 2" countdown="11" timeUnit="days"/>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <SideItem taskName="Task 1" dueDate="dd/mm/yyyy"/>
            <SideItem taskName="Task 2" dueDate="dd/mm/yyyy"/>
            <SideItem taskName="Task 3" dueDate="dd/mm/yyyy"/>
          </div>
        </div>
        <div>
          <SideStickie />
        </div>
      </div>
    </div>
  );
}
