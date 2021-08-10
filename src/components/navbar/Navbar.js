import React from "react";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import NavbarLogo from "./NavbarLogo";
import {
  BiAtom,
  BiGridAlt,
  BiCheckSquare,
  BiNotepad,
  BiExtension,
  BiUserCircle,
  BiCog,
  BiExit,
} from "react-icons/bi";

export default function Navbar({ darkMode }) {
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="h-screen flex flex-col bg-primary dark:bg-primary-900 text-black dark:text-white">
        <div className="w-20 mt-4">
          <div className="absolute top-4 w-20 z-10">
            <NavbarLogo darkMode={darkMode} icon={<BiAtom />} accent={true} />
          </div>
          <div className="overflow-hidden overflow-y-auto no-scrollbar h-[calc(100vh-4rem)] flex flex-col gap-4 sticky mt-8">
            <div className="mt-4"></div>
            <Link to="/" aria-label="home">
              <NavbarItem darkMode={darkMode} icon={<BiGridAlt />} path="/" />
            </Link>
            <Link to="/reminders" aria-label="reminders">
              <NavbarItem
                darkMode={darkMode}
                icon={<BiCheckSquare />}
                path="/reminders"
              />
            </Link>
            <Link to="/notes" aria-label="notes">
              <NavbarItem
                darkMode={darkMode}
                icon={<BiNotepad />}
                path="/notes"
              />
            </Link>
            <Link to="/extensions" aria-label="extensions">
              <NavbarItem
                darkMode={darkMode}
                icon={<BiExtension />}
                path="/extensions"
              />
            </Link>
            <Link to="/profile" aria-label="profile">
              <NavbarItem
                darkMode={darkMode}
                icon={<BiUserCircle />}
                path="/profile"
              />
            </Link>
            <Link to="/settings" aria-label="settings">
              <NavbarItem
                darkMode={darkMode}
                icon={<BiCog />}
                path="/settings"
              />
            </Link>
            <Link to="/logout" aria-label="logout">
              <NavbarItem
                darkMode={darkMode}
                icon={<BiExit />}
                path="/logout"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
