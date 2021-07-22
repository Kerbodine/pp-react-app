import React from "react";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import {BiAtom, BiGridAlt, BiCheckSquare, BiNotepad, BiExtension, BiUserCircle, BiCog, BiExit} from "react-icons/bi";

export default function Navbar({ darkMode, logoutHandler }) {
  return (
    <div className={`${ darkMode ? "dark" : "" }`}>
      <div className="h-screen flex flex-col bg-primary dark:bg-primary-800 text-black dark:text-white transition-colors">
          <div className="w-20 flex flex-col gap-4 mt-4">
            <NavbarItem darkMode={darkMode} icon={<BiAtom />} />
            <Link to="/" aria-label="home">
              <NavbarItem darkMode={darkMode} icon={<BiGridAlt />} path="/" />
            </Link>
            <Link to="/reminders" aria-label="reminders">
              <NavbarItem darkMode={darkMode} icon={<BiCheckSquare />} path="/reminders" />
            </Link>
            <Link to="/notes" aria-label="notes">
              <NavbarItem darkMode={darkMode} icon={<BiNotepad />} path="/notes" />
            </Link>
            <Link to="/extensions" aria-label="extensions">
              <NavbarItem darkMode={darkMode} icon={<BiExtension />} path="/extensions" />
            </Link>
          </div>
          <div className="mt-auto pt-4 mb-4 flex flex-col gap-4">
            <Link to="/profile" aria-label="profile">
              <NavbarItem darkMode={darkMode} icon={<BiUserCircle />} path="/profile" />
            </Link>
            <Link to="/settings" aria-label="settings">
              <NavbarItem darkMode={darkMode} icon={<BiCog />} path="/settings" />
            </Link>
            <NavbarItem darkMode={darkMode} icon={<BiExit />} onClick={logoutHandler} />
          </div>
      </div>
    </div>
  );
}
