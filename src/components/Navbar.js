import { MdDashboard, MdAccountBox } from "react-icons/md";
import { BiCalendar, BiCheckSquare, BiNote, BiWrench, BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";

import { Link } from "react-router-dom";

import NavbarTitle from "./NavbarTitle";
import NavbarItem from "./NavbarItem";

export default function Navbar( {isExpanded, toggleNavbarHandler} ) {
 
  return (
    <div className={`fixed top-0 left-0 bottom-0 flex flex-col h-full bg-gray-800 text-white transition-width ${isExpanded ? " w-48 " : "w-14"}`}>
      <IconContext.Provider value={{ color: 'white'}}>
      <NavbarTitle icon={<BiMenu />} click={toggleNavbarHandler} title="LOGO" expanded={isExpanded}/>
      <hr className={`border transition-width mx-2 ${isExpanded ? "w-44" : "w-10"}`}></hr>
      <div className="flex flex-col px-2">
        <Link to="/"><NavbarItem icon={<MdDashboard />} title="Dashboard" expanded={isExpanded}></NavbarItem></Link>
        <Link to="/profile"><NavbarItem icon={<MdAccountBox />} title="Account" expanded={isExpanded}/></Link>
        <Link to="/calendar"><NavbarItem icon={<BiCalendar />} title="Calendar" expanded={isExpanded}/></Link>
        <Link to="/reminders"><NavbarItem icon={<BiCheckSquare />} title="Reminders" expanded={isExpanded}/></Link>
        <Link to="/notes"><NavbarItem icon={<BiNote />} title="Notes" expanded={isExpanded}/></Link>
        <Link to="/tools"><NavbarItem icon={<BiWrench />} title="Tools" expanded={isExpanded}/></Link>
      </div>
      </IconContext.Provider>
    </div>
  );
}
