import React from "react";
import TextEditor from "../TextEditor";
import TagList from "./TagList";
import PageSidebar from "./PageSidebar";

export default function Notes() {
  return (
    <div className="h-screen w-full bg-primary dark:bg-primary-800 flex">
      <div className="w-full h-auto mr-4 mt-20 mb-4 lg:mr-0">
        <div className="h-full rounded-2xl overflow-hidden shadow-md transition-width flex flex-row ">
          <div className="h-full">
            <div className="w-0 md:w-48 bg-primary-200 h-full">
              <PageSidebar />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="">
              <div className="px-8 pt-8 bg-primary-100 flex flex-col">
                <input
                  id="document-title"
                  autoComplete="off"
                  className="h-12 bg-transparent text-primary-800 font-bold outline-none text-4xl mb-4"
                  placeholder="Untitled"
                  type="text"
                  aria-label="document title"
                ></input>
                <TagList />
                <div className="w-full h-4 bg-primary-100"></div>
              </div>
            </div>
            <div className="px-8 overflow-y-scroll overflow-x-hidden h-full bg-primary-100">
              <TextEditor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
