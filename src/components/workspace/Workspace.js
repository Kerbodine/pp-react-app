/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext, useRef } from "react";
import WorkspaceSidebar from "./WorkspaceSidebar";
import TaskItem from "../reminders/TaskItem";
import { v4 as uuidv4 } from "uuid";
import {
  BiTrash,
  BiListUl,
  BiChevronDown,
  BiPlus,
  BiShow,
  BiHide,
  BiInfoCircle,
  BiChevronRight,
  BiDotsHorizontalRounded,
  BiDotsVerticalRounded,
  BiLoaderAlt,
} from "react-icons/bi";
import TagList from "../notes/TagList";
import ConfirmModal from "../ui/ConfirmModal";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ReactTooltip from "react-tooltip";
import UserContext from "../../UserContext";
import ListOptionsPanel from "../ui/ListOptionsPanel";
import { Editor } from "@tinymce/tinymce-react";
import WorkspaceReminderItem from "./WorkspaceReminderItem";
import WorkspaceReminder from "./WorkspaceReminder";

export default function Workspace({
  setReminderData,
  darkMode,
  remindersListIndex,
  setReminderListIndex,
  allData,
}) {
  const [allLists, setAllLists] = useState(allData);
  const [currentListIndex, setCurrentListIndex] = useState(0);
  const [taskList, setTaskList] = useState({ tasks: [], completed: [] });
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

  //

  //

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
    if (currentListIndex >= 5) {
      let temp = allLists;
      temp[currentListIndex].title = e.target.value;
      setAllLists([...temp]);
    }
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

  useEffect(() => {
    setReminderData(allLists);
  }, [allLists]);

  useEffect(() => {
    setReminderListIndex(currentListIndex);
  }, [currentListIndex]);

  const updateTagHandler = (tagList) => {
    let temp = allLists;
    temp[currentListIndex].tags = tagList;
    setAllLists([...temp]);
  };

  const editorRef = useRef(null);
  const [editorLoading, setEditorLoading] = useState(true);

  // const handleUpdate = (value, editor) => {
  //   let temp = allLists;
  //   temp[currentListIndex].content = value;
  //   setAllLists(temp);
  //   console.log(allLists);
  // };

  useEffect(() => {
    setTaskList(
      allLists.slice(currentListIndex, currentListIndex + 1).map((item) => {
        switch (item.type) {
          case "reminders":
            return {
              tasks: item.tasks
                .map((task) => {
                  return (
                    <div key={task.id}>
                      <WorkspaceReminderItem
                        id={task.id}
                        title={task.title}
                        creationDate={task.creationDate}
                        dueDate={task.dueDate}
                        completed={false}
                        description={task.description}
                        today={task.today}
                        important={task.important}
                        starred={task.starred}
                        expanded={task.expanded}
                        pinned={task.pinned}
                        updateComponent={updateTaskHandler}
                        deleteTask={deleteTaskHandler}
                        completeTaskHandler={completeTaskHandler}
                      />
                    </div>
                  );
                })
                .flat(),
              completed: item.completed
                .map((task) => {
                  return (
                    <div key={task.id}>
                      <WorkspaceReminderItem
                        id={task.id}
                        title={task.title}
                        creationDate={task.creationDate}
                        dueDate={task.dueDate}
                        completed={true}
                        description={task.description}
                        today={task.today}
                        important={task.important}
                        starred={task.starred}
                        expanded={task.expanded}
                        pinned={task.pinned}
                        updateComponent={updateTaskHandler}
                        deleteTask={deleteTaskHandler}
                        unCompleteTaskHandler={unCompleteTaskHandler}
                      />
                    </div>
                  );
                })
                .flat(),
            };
          case "notes":
            return <div>a</div>;
          default:
            return null;
        }
      })[0]
    );
  }, [allLists, currentListIndex]);

  console.log(taskList);

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
              />
            </div>
          </div>
          <div className="w-full h-full">
            <div className="bg-primary-100 dark:bg-primary-800 h-full">
              <div
                className={`w-full h-12 bg-${allLists[currentListIndex].color}-400`}
              ></div>
              <div className="h-12 mx-8 mt-8 flex items-center">
                <input
                  className="bg-transparent truncate text-black dark:text-white font-bold outline-none text-4xl"
                  autoComplete="off"
                  value={allLists[currentListIndex].title}
                  onChange={titleChangeHandler}
                  type="text"
                  aria-label="list title"
                ></input>
                <ListOptionsPanel
                  currentListIndex={currentListIndex}
                  settingsDropdown={settingsDropdown}
                  handleSettingsDropdown={handleSettingsDropdown}
                  userData={userData}
                  listIconHandler={listIconHandler}
                  toggleDeleteConfirmation={toggleDeleteConfirmation}
                  listColorHandler={listColorHandler}
                />
                <ConfirmModal
                  darkMode={darkMode}
                  message={`"${allLists[currentListIndex].title}"`}
                  deleteConfirmation={deleteConfirmation}
                  toggleDeleteConfirmation={toggleDeleteConfirmation}
                  deleteListHandler={deleteListHandler}
                />
              </div>
              {allLists[currentListIndex].type === "reminders" ? (
                <WorkspaceReminder
                  allLists={allLists}
                  currentListIndex={currentListIndex}
                  toggleShowCompleted={toggleShowCompleted}
                  newTaskHandler={newTaskHandler}
                  taskList={taskList}
                />
              ) : null}
              {/* {taskList.length > 0 ? (
                <DragDropContext onDragEnd={handleOnDragEnd}>
                  <Droppable droppableId="reminders">
                    {(provided, snapshot) => (
                      <div
                        className={`${
                          snapshot.isDraggingOver ? "ring-2" : "ring-none"
                        } ring-primary-300 dark:ring-primary-600 mx-4 mb-4 px-4 pt-4 pb-2 rounded-md flex flex-col`}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {taskList}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              ) : (
                <div className="flex items-center ml-8 mb-4 text-black dark:text-white">
                  <BiInfoCircle />
                  <p className="ml-1 text-sm">No tasks</p>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
