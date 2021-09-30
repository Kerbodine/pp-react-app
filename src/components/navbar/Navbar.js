import React from "react";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import NavbarLogo from "./NavbarLogo";
import { useLocation } from "react-router-dom";
import {
  BiAtom,
  BiGridAlt,
  BiCheckSquare,
  BiNotepad,
  BiBookBookmark,
  BiExtension,
  BiCog,
} from "react-icons/bi";

export default function Navbar() {
  const location = useLocation();

  let active = false;
  location.pathname.split("/")[1] !== "login"
    ? (active = true)
    : (active = false);

  return (
    <div
      className={`${
        active ? "visible" : "hidden"
      } h-screen flex flex-col bg-primary dark:bg-primary-900 text-black dark:text-white`}
    >
      <div className="w-20 mt-4">
        <div className="w-20">
          <NavbarLogo icon={<BiAtom />} accent={true} />
        </div>
        <hr className="border-none h-0.5 my-4 bg-primary-300 dark:bg-primary-600 mx-6" />
        <div className="flex flex-col gap-4">
          <Link to="/" aria-label="home">
            <NavbarItem icon={<BiGridAlt />} path="/" />
          </Link>
          <Link to="/extensions" aria-label="extensions">
            <NavbarItem icon={<BiExtension />} path="/extensions" />
          </Link>
          <Link to="/settings" aria-label="settings">
            <NavbarItem icon={<BiCog />} path="/settings" />
          </Link>
        </div>
      </div>
    </div>
  );
}
