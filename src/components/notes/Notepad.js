import React from "react";
import TextEditor from "../TextEditor";
import TagList from "./TagList";
import PageSidebar from "./PageSidebar";

export default function Notepad() {

  return (
    <div className="h-screen w-full flex flex-col bg-primary-800">
      <div className="h-full mr-4 mb-4 mt-20 lg:mr-0">
        <div className="h-full rounded-2xl shadow-md transition-width flex flex-row ">
          <div className="flex flex-col">
            <div className="h-8 w-auto rounded-tl-2xl bg-accent-400"></div>
            <div className="w-0 md:w-48 flex-auto bg-red-200 rounded-bl-2xl h-48">
              <PageSidebar />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="">
              <div className="h-8 w-auto rounded-t-2xl md:rounded-none md:rounded-tr-2xl bg-accent-400"></div>
              <div className="px-4 pt-4 bg-gray-100">
                <input id="document-title" className="h-12 bg-transparent text-primary-800 font-bold outline-none text-4xl px-2 mb-4" placeholder="Untitled" type="text"></input>
                <TagList />
                <div className="w-full h-4 bg-primary-100"></div>
              </div>
            </div>
            <div className="px-4 -mt-2 relative overflow-y-scroll overflow-x-hidden h-full bg-gray-100 rounded-b-2xl md:rounded-none md:rounded-br-2xl">
              <TextEditor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
