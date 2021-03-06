import React, { useState, useEffect, useRef, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import TagList from "./TagList";
import PageSidebar from "./PageSidebar";
import { Editor } from "@tinymce/tinymce-react";
import ColorPicker from "../ui/ColorPicker";
import ConfirmModal from "../ui/ConfirmModal";
import {
  BiPencil,
  BiCaretDownCircle,
  BiCaretUpCircle,
  BiLoaderAlt,
  BiFile,
  BiShow,
  BiChevronDown,
  BiTrash,
} from "react-icons/bi";
import UserContext from "../../UserContext";

export default function Notes({ darkMode, notesListIndex, setNotesListIndex }) {
  const pageData = [
    {
      id: uuidv4(),
      icon: <BiFile />,
      title: "Note 1",
      color: "red",
      content: "",
      tags: [],
      readOnly: false,
    },
    {
      id: uuidv4(),
      icon: <BiFile />,
      title: "Note 2",
      color: "amber",
      content: "",
      tags: [],
      readOnly: false,
    },
    {
      id: uuidv4(),
      icon: <BiFile />,
      title: "Note 3",
      color: "blue",
      content: "",
      tags: [],
      readOnly: false,
    },
  ];

  const { userData } = useContext(UserContext);

  const editorRef = useRef(null);

  const [readOnly, setReadOnly] = useState(false);
  const [viewModeDropdown, setViewModeDropdown] = useState(false);
  const [allPages, setAllPages] = useState(pageData);
  const [currentPageIndex, setCurrentPageIndex] = useState(notesListIndex);
  const [editorLoading, setEditorLoading] = useState(true);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [colorDropdown, setColorDropdown] = useState(false);

  const readOnlyHandler = () => {
    setReadOnly(!readOnly);
  };

  const viewModeDropdownHandler = () => {
    setViewModeDropdown(!viewModeDropdown);
  };

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

  useEffect(() => {
    setReadOnly(allPages[currentPageIndex].readOnly);
  }, [currentPageIndex]);

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

  const handleColorDropdown = () => {
    setColorDropdown(!colorDropdown);
  };

  const toggleDeleteConfirmation = () => {
    setDeleteConfirmation(!deleteConfirmation);
  };

  const listColorHandler = (newColor) => {
    let temp = allPages;
    temp[currentPageIndex].color = newColor;
    setAllPages([...temp]);
    setColorDropdown(false);
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
            <div className="px-8 pt-8 bg-primary-100 dark:bg-primary-800 flex flex-col">
              <div className="flex flex-row items-center">
                <input
                  id="document-title"
                  autoComplete="off"
                  placeholder="Untitled document"
                  value={allPages[currentPageIndex].title}
                  onChange={titleChangeHandler}
                  className="h-12 flex-auto truncate bg-transparent text-black dark:text-white font-bold outline-none text-4xl mb-4"
                  type="text"
                  aria-label="document title"
                ></input>
                <div
                  className={`relative w-8 h-8 rounded-full bg-${
                    allPages[currentPageIndex].color
                      ? `${allPages[currentPageIndex].color}-400 text-white`
                      : "primary-200 text-black"
                  } text-2xl flex items-center justify-center hover:bg-${
                    allPages[currentPageIndex].color
                  }-400/80`}
                  onClick={handleColorDropdown}
                >
                  <BiChevronDown />
                  <div
                    className={`${
                      colorDropdown ? "visible" : "hidden"
                    } absolute top-10 w-[6.5rem] h-auto z-10 bg-white dark:bg-primary-600 rounded-md shadow-md flex flex-wrap gap-2 p-2`}
                  >
                    {userData.allColors.map((color) => (
                      <ColorPicker
                        color={color}
                        listColorHandler={listColorHandler}
                      />
                    ))}
                  </div>
                </div>
                <div
                  className={`relative w-8 h-8 rounded-full bg-primary-200 hover:bg-red-400 dark:bg-primary-700 dark:text-white dark:hover:bg-red-400 text-black hover:text-white text-2xl ml-2 flex items-center justify-center`}
                  onClick={toggleDeleteConfirmation}
                >
                  <BiTrash />
                </div>
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
                <button
                  className="w-20 h-8 bg-primary-200 dark:bg-primary-700 text-black dark:text-white rounded-full relative flex items-center"
                  onClick={viewModeDropdownHandler}
                >
                  <i className="text-2xl px-2">
                    {readOnly ? <BiShow /> : <BiPencil />}
                  </i>
                  <div className="text-2xl px-2">
                    {viewModeDropdown ? (
                      <BiCaretDownCircle />
                    ) : (
                      <BiCaretUpCircle />
                    )}
                  </div>
                  <div
                    className={`${
                      viewModeDropdown ? "visible" : "hidden"
                    } absolute top-10 right-0 w-30 h-16 rounded-md bg-white dark:bg-primary-700 shadow-md overflow-hidden z-10`}
                  >
                    <div
                      className={`w-full h-8 flex items-center px-2 cursor-pointer ${
                        readOnly
                          ? "bg-primary-200 dark:bg-primary-900"
                          : "hover:bg-primary-100 dark:hover:bg-primary-800"
                      }`}
                      onClick={readOnlyHandler}
                    >
                      <i className="text-2xl">
                        <BiShow />
                      </i>
                      <h4 className="mx-1.5 whitespace-nowrap">Viewing</h4>
                    </div>
                    <div
                      className={`w-full h-8 flex items-center px-2 cursor-pointer ${
                        readOnly
                          ? "hover:bg-primary-100 dark:hover:bg-primary-800"
                          : "bg-primary-200 dark:bg-primary-900"
                      }`}
                      onClick={readOnlyHandler}
                    >
                      <i className="text-2xl">
                        <BiPencil />
                      </i>
                      <h4 className="mx-1.5 whitespace-nowrap">Editing</h4>
                    </div>
                  </div>
                </button>
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
