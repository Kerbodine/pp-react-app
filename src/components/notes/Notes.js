import React, { useState, useEffect, useRef, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import TagList from "./TagList";
import PageSidebar from "./PageSidebar";
import { Editor } from "@tinymce/tinymce-react";
import ConfirmModal from "../ui/ConfirmModal";
import { BiLoaderAlt, BiFile } from "react-icons/bi";
import UserContext from "../../UserContext";
import ListOptionsPanel from "../ui/ListOptionsPanel";

export default function Notes({
  darkMode,
  notesListIndex,
  setNotesListIndex,
  pageData,
}) {
  const { userData } = useContext(UserContext);

  const editorRef = useRef(null);

  const [allPages, setAllPages] = useState(pageData);
  const [currentPageIndex, setCurrentPageIndex] = useState(notesListIndex);
  const [editorLoading, setEditorLoading] = useState(true);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [settingsDropdown, setSettingsDropdown] = useState(false);

  const selectPageHandler = (index) => {
    setCurrentPageIndex(index);
  };

  const titleChangeHandler = (e) => {
    let temp = allPages;
    temp[currentPageIndex].title = e.target.value;
    setAllPages([...temp]);
  };

  const newPageHandler = () => {
    const newPage = {
      id: uuidv4(),
      icon: <BiFile />,
      title: "Untitled note",
      color: "gray",
      content: "",
      tags: [],
      readOnly: false,
    };
    setAllPages([...allPages, newPage]);
    setCurrentPageIndex(allPages.length);
  };

  const handleUpdate = (value, editor) => {
    let temp = allPages;
    temp[currentPageIndex].content = value;
    setAllPages(temp);
  };

  const updateTagHandler = (tagList) => {
    let temp = allPages;
    temp[currentPageIndex].tags = tagList;
    setAllPages([...temp]);
  };

  useEffect(() => {
    setNotesListIndex(currentPageIndex);
  });

  const deleteListHandler = () => {
    setDeleteConfirmation(false);
    const temp = allPages;
    temp.splice(currentPageIndex, 1);
    setAllPages([...temp]);
    setCurrentPageIndex(allPages.length - 1);
  };

  const handleSettingsDropdown = () => {
    setSettingsDropdown(!settingsDropdown);
  };

  const toggleDeleteConfirmation = () => {
    setDeleteConfirmation(!deleteConfirmation);
  };

  const listColorHandler = (newColor) => {
    let temp = allPages;
    temp[currentPageIndex].color = newColor;
    setAllPages([...temp]);
    setSettingsDropdown(false);
  };

  const listIconHandler = (newIcon) => {
    let temp = allPages;
    temp[currentPageIndex].icon = newIcon;
    setAllPages([...temp]);
    setSettingsDropdown(false);
  };

  return (
    <div className="h-screen w-full bg-primary dark:bg-primary-900 flex">
      <div className="w-full h-auto my-4">
        <div className="h-full rounded-2xl overflow-hidden transition-width flex flex-row ">
          <div className="h-full">
            <div className="w-0 md:w-48 bg-primary-200 dark:bg-primary-700 h-full">
              <PageSidebar
                allPages={allPages}
                selectPage={selectPageHandler}
                newPageHandler={newPageHandler}
              />
            </div>
          </div>
          <div className="w-full">
            <div
              className={`w-full h-12 bg-${allPages[currentPageIndex].color}-400`}
            ></div>
            <div className="px-8 pt-8 bg-primary-100 dark:bg-primary-800">
              <div className="h-12 flex items-center">
                <input
                  id="document-title"
                  autoComplete="off"
                  placeholder="Untitled document"
                  value={allPages[currentPageIndex].title}
                  onChange={titleChangeHandler}
                  className="bg-transparent truncate text-black dark:text-white font-bold outline-none text-4xl"
                  type="text"
                  aria-label="document title"
                ></input>
                <ListOptionsPanel
                  currentListIndex={currentPageIndex}
                  settingsDropdown={settingsDropdown}
                  handleSettingsDropdown={handleSettingsDropdown}
                  userData={userData}
                  listIconHandler={listIconHandler}
                  toggleDeleteConfirmation={toggleDeleteConfirmation}
                  listColorHandler={listColorHandler}
                  startNum={0}
                />
                <ConfirmModal
                  darkMode={darkMode}
                  message={`"${allPages[currentPageIndex].title}"`}
                  deleteConfirmation={deleteConfirmation}
                  toggleDeleteConfirmation={toggleDeleteConfirmation}
                  deleteListHandler={deleteListHandler}
                />
              </div>
              <div className="flex">
                <div className="flex-auto">
                  <TagList
                    tags={allPages[currentPageIndex].tags}
                    updateTagHandler={updateTagHandler}
                    key={currentPageIndex}
                  />
                </div>
              </div>
              <div className="w-full h-4 bg-primary-100 dark:bg-primary-800"></div>
            </div>
            <div className="px-8 overflow-hidden h-full bg-primary-100 dark:bg-primary-800 !text-black dark:!text-white">
              <div className="w-full h-[calc(100%-222px)] rounded-2xl overflow-hidden">
                {editorLoading ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <BiLoaderAlt className="text-4xl text-black dark:text-white animate-spin" />
                  </div>
                ) : null}
                <Editor
                  onInit={(evt, editor) => {
                    editorRef.current = editor;
                    setEditorLoading(false);
                  }}
                  key={[darkMode, currentPageIndex]}
                  id="tinymce-editor"
                  onEditorChange={handleUpdate}
                  initialValue={allPages[currentPageIndex].content}
                  apiKey="9jz5ulzyll0jkomjnscn6f2rm725w3kuuu6eoay5e974vhm7"
                  init={{
                    skin_url: darkMode ? "/oxide-dark" : "/oxide",
                    content_css: darkMode
                      ? "/dark-mode-content.css"
                      : "./light-mode-content.css",
                    height: "100%",
                    menubar: false,
                    resize: false,
                    plugins: [
                      "advlist autolink lists link charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen preview emoticons print",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | styleselect | bold italic | numlist bullist | alignleft aligncenter alignright alignjustify | outdent indent | link emoticons | code | fullscreen print",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
