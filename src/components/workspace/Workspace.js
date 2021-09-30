/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext, useRef } from "react";
import WorkspaceSidebar from "./WorkspaceSidebar";
import { v4 as uuidv4 } from "uuid";
import { BiFile, BiListUl } from "react-icons/bi";
import ConfirmModal from "../ui/ConfirmModal";
import UserContext from "../../UserContext";
import ListOptionsPanel from "../ui/ListOptionsPanel";
import WorkspaceReminder from "./WorkspaceReminder";
import WorkspaceNotes from "./WorkspaceNotes";
import NewPageModal from "../ui/NewPageModal";

export default function Workspace({ darkMode, allData }) {
  const [allLists, setAllLists] = useState(allData);
  const [currentListIndex, setCurrentListIndex] = useState(0);
  const [settingsDropdown, setSettingsDropdown] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const { userData } = useContext(UserContext);

  // takes in a new task object as input and replaces the old task at index location
  const updateTaskHandler = (taskProperties) => {
    let tempTask = taskProperties;
    allLists.forEach((list, i) => {
      if (list.type === "reminders") {
        list.tasks.forEach((task, j) => {
          if (task.id === tempTask.id) {
            let temp = allLists;
            temp[i].tasks[j] = tempTask;
            setAllLists([...temp]);
          }
        });
      }
    });
  };

  // deleting tasks by searching through array for object id
  const deleteTaskHandler = (id) => {
    allLists.forEach((list, i) => {
      if (list.type === "reminders") {
        list.tasks.forEach((task, j) => {
          if (task.id === id) {
            let temp = allLists;
            temp[i].tasks.splice(j, 1);
            setAllLists([...temp]);
          }
        });
      }
    });
  };

  // moving completed task items into the completed tasks array
  const completeTaskHandler = (id) => {
    allLists.forEach((list, i) => {
      if (list.type === "reminders") {
        list.tasks.forEach((task, j) => {
          if (task.id === id) {
            let temp = allLists;
            let tempTask = task;
            temp[i].tasks.splice(j, 1);
            temp[i].completed = [...allLists[i].completed, tempTask];
            setAllLists([...temp]);
          }
        });
      }
    });
  };

  // Manage color dropdown state
  const handleSettingsDropdown = () => {
    setSettingsDropdown(!settingsDropdown);
  };

  // Function to update color for current list
  const listColorHandler = (newColor) => {
    let temp = allLists;
    temp[currentListIndex].color = newColor;
    setAllLists([...temp]);
    setSettingsDropdown(false);
  };

  const listIconHandler = (newIcon) => {
    let temp = allLists;
    temp[currentListIndex].icon = newIcon;
    setAllLists([...temp]);
    setSettingsDropdown(false);
  };

  // Function to change list title
  const titleChangeHandler = (e) => {
    let temp = allLists;
    temp[currentListIndex].title = e.target.value;
    setAllLists([...temp]);
  };

  // Deleting tasks based on their index in currentList.tasks
  const deleteCompletedTaskHandler = (id) => {
    allLists.forEach((list, i) => {
      if (list.type === "reminders") {
        list.completed.forEach((task, j) => {
          if (task.id === id) {
            let temp = allLists;
            temp[i].completed.splice(j, 1);
            setAllLists([...temp]);
          }
        });
      }
    });
  };

  // Adding a new task to the end of currentList.tasks
  const newTaskHandler = () => {
    let temp = allLists;
    temp[currentListIndex].tasks.push({
      id: uuidv4(),
      title: "",
      dueDate: null,
      description: "",
      today: false,
      important: false,
      starred: false,
      expanded: true,
      pinned: false,
    });
    setAllLists([...temp]);
  };

  // Adding a new list to the end of allLists
  const newListHandler = () => {
    const newList = {
      id: uuidv4(),
      title: "Untitled list",
      color: "gray",
      icon: <BiListUl />,
      tasks: [],
      completed: [],
      showCompleted: false,
    };
    setAllLists([...allLists, newList]);
    setCurrentListIndex(allLists.length);
  };

  const deleteListHandler = () => {
    setDeleteConfirmation(false);
    const temp = allLists;
    temp.splice(currentListIndex, 1);
    setAllLists([...temp]);
    setCurrentListIndex(allLists.length - 1);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(allLists[currentListIndex].tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    let temp = allLists;
    temp[currentListIndex].tasks = [...items];

    setAllLists([...temp]);
  };

  const unCompleteTaskHandler = (id) => {
    allLists.forEach((list, i) => {
      if (list.type === "reminders") {
        list.completed.forEach((task, j) => {
          if (task.id === id) {
            let temp = allLists;
            let tempTask = task;
            temp[i].completed.splice(j, 1);
            temp[i].tasks = [...allLists[i].tasks, tempTask];
            setAllLists([...temp]);
          }
        });
      }
    });
  };

  const toggleShowCompleted = () => {
    let temp = allLists;
    temp[currentListIndex].showCompleted =
      !allLists[currentListIndex].showCompleted;
    setAllLists([...temp]);
  };

  useEffect(() => {}, []);

  const toggleDeleteConfirmation = () => {
    setDeleteConfirmation(!deleteConfirmation);
  };

  const editorRef = useRef(null);

  const updateTagHandler = (tagList) => {
    let temp = allLists;
    temp[currentListIndex].tags = tagList;
    setAllLists([...temp]);
  };

  const handleUpdate = (value, editor) => {
    let temp = allLists;
    temp[currentListIndex].content = value;
    setAllLists(temp);
  };

  // useEffect(() => {
  //   setReminderData(allLists);
  // }, [allLists]);

  // useEffect(() => {
  //   setReminderListIndex(currentListIndex);
  // }, [currentListIndex]);

  const [editorLoading, setEditorLoading] = useState(true);

  const updateNote = (noteProperties) => {
    let tempTask = noteProperties;
    let temp = allLists;
    temp[currentListIndex] = tempTask;
    setAllLists(temp);
  };

  const [newPageMenu, setNewPageMenu] = useState(false);

  const toggleNewPageMenu = () => {
    setNewPageMenu(!newPageMenu);
  };

  useEffect(() => {
    setSettingsDropdown(false);
  }, [currentListIndex]);

  const newRemindersHandler = () => {
    let newRemindersList = {
      type: "reminders",
      id: uuidv4(),
      title: "",
      color: "gray",
      icon: <BiListUl />,
      creationDate: Date.now(),
      tasks: [],
      completed: [],
      showCompleted: false,
    };
    setAllLists([...allLists, newRemindersList]);
    setCurrentListIndex(allLists.length);
  };

  const newNotesHandler = () => {
    let newNotepad = {
      type: "notes",
      id: uuidv4(),
      icon: <BiFile />,
      title: "",
      color: "gray",
      creationDate: Date.now(),
      content: "",
      tags: [],
      today: false,
      important: false,
      starred: false,
      pinned: false,
    };
    setAllLists([...allLists, newNotepad]);
    setCurrentListIndex(allLists.length);
  };

  return (
    <div className="h-screen flex bg-primary dark:bg-primary-900">
      <div className="my-4 w-full">
        <div className="h-full rounded-2xl flex overflow-hidden">
          <div className="h-full">
            <div className="w-0 md:w-48 bg-primary-200 dark:bg-primary-700 h-full">
              <WorkspaceSidebar
                allLists={allLists}
                selectItemHandler={(index) => {
                  setCurrentListIndex(index);
                }}
                newItemHandler={newListHandler}
                currentListIndex={currentListIndex}
                toggleNewPageMenu={toggleNewPageMenu}
              />
            </div>
          </div>
          <div className="w-full h-full">
            <div className="bg-primary-100 dark:bg-primary-800 h-full">
              <div
                className={`w-full h-12 bg-${allLists[currentListIndex].color}-400`}
              ></div>
              <div className="h-12 mx-8 mt-8 mb-4 flex items-center">
                <input
                  className="bg-transparent flex-auto mr-4 truncate text-black dark:text-white font-semibold outline-none text-4xl"
                  autoComplete="off"
                  value={allLists[currentListIndex].title}
                  onChange={titleChangeHandler}
                  type="text"
                  aria-label="list title"
                  placeholder="Untitled"
                ></input>
                <ListOptionsPanel
                  currentListIndex={currentListIndex}
                  settingsDropdown={settingsDropdown}
                  setSettingsDropdown={setSettingsDropdown}
                  userData={userData}
                  listIconHandler={listIconHandler}
                  deleteConfirmation={deleteConfirmation}
                  setDeleteConfirmation={setDeleteConfirmation}
                  listColorHandler={listColorHandler}
                  startNum={0}
                />
                <ConfirmModal
                  darkMode={darkMode}
                  message={`"${allLists[currentListIndex].title}"`}
                  deleteConfirmation={deleteConfirmation}
                  setDeleteConfirmation={setDeleteConfirmation}
                  deleteListHandler={deleteListHandler}
                />
                <NewPageModal
                  darkMode={darkMode}
                  newPageMenu={newPageMenu}
                  setNewPageMenu={setNewPageMenu}
                  newRemindersHandler={newRemindersHandler}
                  newNotesHandler={newNotesHandler}
                />
              </div>
              {}
              {allLists[currentListIndex].type === "reminders" ? (
                <WorkspaceReminder
                  key={currentListIndex}
                  allLists={allLists}
                  currentItem={allLists[currentListIndex]}
                  toggleShowCompleted={toggleShowCompleted}
                  newTaskHandler={newTaskHandler}
                  updateTaskHandler={updateTaskHandler}
                  deleteTaskHandler={deleteTaskHandler}
                  deleteCompletedTaskHandler={deleteCompletedTaskHandler}
                  completeTaskHandler={completeTaskHandler}
                  unCompleteTaskHandler={unCompleteTaskHandler}
                />
              ) : null}
              {allLists[currentListIndex].type === "notes" ? (
                <WorkspaceNotes
                  key={currentListIndex}
                  currentItem={allLists[currentListIndex]}
                  updateTagHandler={updateTagHandler}
                  editorRef={editorRef}
                  handleUpdate={handleUpdate}
                  editorLoading={editorLoading}
                  setEditorLoading={setEditorLoading}
                  updateComponent={updateNote}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
