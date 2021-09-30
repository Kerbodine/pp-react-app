/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext, useRef } from "react";
import ReminderSidebar from "./ReminderSidebar";
import TaskItem from "./TaskItem";
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
import IconPicker from "../ui/IconPicker";
import ConfirmModal from "../ui/ConfirmModal";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ColorPicker from "../ui/ColorPicker";
import ReactTooltip from "react-tooltip";
import UserContext from "../../UserContext";
import ListOptionsPanel from "../ui/ListOptionsPanel";
import { Editor } from "@tinymce/tinymce-react";

export default function Reminders({
  remindersData,
  setReminderData,
  darkMode,
  remindersListIndex,
  setReminderListIndex,
  allData,
}) {
  const [allLists, setAllLists] = useState([...remindersData, ...allData]);
  const [currentListIndex, setCurrentListIndex] = useState(remindersListIndex);
  const [taskList, setTaskList] = useState([]);
  const [settingsDropdown, setSettingsDropdown] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const { userData } = useContext(UserContext);

  const updateTaskHandler = (
    id,
    title,
    dueDate,
    description,
    today,
    important,
    starred,
    expanded,
    pinned
  ) => {
    let tempTask = {
      id: id,
      title: title,
      dueDate: dueDate,
      completed: false,
      description: description,
      today: today,
      important: important,
      starred: starred,
      expanded: expanded,
      pinned: pinned,
    };
    allLists.forEach((list, i) =>
      list.tasks.forEach((task, j) => {
        if (task.id === tempTask.id) {
          let temp = allLists;
          temp[i].tasks[j] = tempTask;
          setAllLists([...temp]);
        }
      })
    );
  };

  // Function to change current list to selected list
  const selectListHandler = (index) => {
    setCurrentListIndex(index);
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
    if (currentListIndex >= 5) {
      let temp = allLists;
      temp[currentListIndex].title = e.target.value;
      setAllLists([...temp]);
    }
  };

  // Deleting tasks based on their index in currentList.tasks
  const deleteTaskHandler = (id) => {
    allLists.forEach((list, i) =>
      list.tasks.forEach((task, j) => {
        if (task.id === id) {
          let temp = allLists;
          temp[i].tasks.splice(j, 1);
          setAllLists([...temp]);
        }
      })
    );
  };

  // Deleting tasks based on their index in currentList.tasks
  const deleteCompletedTaskHandler = (id) => {
    allLists.forEach((list, i) =>
      list.completed.forEach((task, j) => {
        if (task.id === id) {
          let temp = allLists;
          temp[i].completed.splice(j, 1);
          setAllLists([...temp]);
        }
      })
    );
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

  const completeTaskHandler = (id) => {
    allLists.forEach((list, i) =>
      list.tasks.forEach((task, j) => {
        if (task.id === id) {
          let temp = allLists;
          let tempTask = task;
          temp[i].tasks.splice(j, 1);
          temp[i].completed = [...allLists[i].completed, tempTask];
          setAllLists([...temp]);
        }
      })
    );
  };

  const unCompleteTaskHandler = (id) => {
    allLists.forEach((list, i) =>
      list.completed.forEach((task, j) => {
        if (task.id === id) {
          let temp = allLists;
          let tempTask = task;
          temp[i].completed.splice(j, 1);
          temp[i].tasks = [...allLists[i].tasks, tempTask];
          setAllLists([...temp]);
        }
      })
    );
  };

  const toggleShowCompleted = () => {
    let temp = allLists;
    temp[currentListIndex].showCompleted =
      !allLists[currentListIndex].showCompleted;
    setAllLists([...temp]);
  };

  useEffect(() => {
    const todayFilter = (task) => task.today === true;
    const importantFilter = (task) => task.important === true;
    const starredFilter = (task) => task.starred === true;
    const pinnedFilter = (task) => task.pinned === true;
    const allTaskFilter = (task) => task;

    let taskFilter;
    let sliceStart;
    let sliceEnd;

    switch (currentListIndex) {
      case 0:
        taskFilter = todayFilter;
        break;
      case 1:
        taskFilter = importantFilter;
        break;
      case 2:
        taskFilter = starredFilter;
        break;
      case 3:
        taskFilter = pinnedFilter;
        break;
      case 4:
        taskFilter = allTaskFilter;
        break;
      default:
        sliceStart = currentListIndex;
        sliceEnd = currentListIndex + 1;
        taskFilter = allTaskFilter;
        break;
    }

    // setTaskList(
    //   allLists
    //     .slice(sliceStart, sliceEnd)
    //     .map((task) =>
    //       task.tasks.filter(taskFilter).map((task, index) => (
    //         <Draggable
    //           key={task.id}
    //           draggableId={task.id}
    //           index={index}
    //           isDragDisabled={currentListIndex < 5}
    //         >
    //           {(provided, snapshot) => (
    //             <div
    //               {...provided.draggableProps}
    //               {...provided.dragHandleProps}
    //               ref={provided.innerRef}
    //             >
    //               <TaskItem
    //                 id={task.id}
    //                 title={task.title}
    //                 dueDate={task.dueDate}
    //                 completed={false}
    //                 description={task.description}
    //                 today={task.today}
    //                 important={task.important}
    //                 starred={task.starred}
    //                 expanded={task.expanded}
    //                 pinned={task.pinned}
    //                 updateComponent={updateTaskHandler}
    //                 deleteTask={deleteTaskHandler}
    //                 isDragging={snapshot.isDragging}
    //                 completeTaskHandler={completeTaskHandler}
    //                 dragEnabled={currentListIndex < 5 ? false : true}
    //               />
    //             </div>
    //           )}
    //         </Draggable>
    //       ))
    //     )
    //     .filter((task) => task.length !== 0)
    // );
  }, [currentListIndex, allLists, remindersData]);

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

  const handleUpdate = (value, editor) => {
    let temp = allLists;
    temp[currentListIndex].content = value;
    setAllLists(temp);
  };

  return (
    <div className="h-screen flex bg-primary dark:bg-primary-900">
      <div className="my-4 w-full">
        <div className="h-full rounded-2xl flex overflow-hidden">
          <div className="h-full">
            <div className="w-0 md:w-48 bg-primary-200 dark:bg-primary-700 h-full">
              <ReminderSidebar
                allLists={allLists}
                selectList={selectListHandler}
                newListHandler={newListHandler}
                allData={allData}
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
              {currentListIndex >= 5 ? (
                allLists[currentListIndex].type === "reminders" ? (
                  <>
                    <div
                      className={`mx-8 flex gap-2 ${
                        currentListIndex < 5 ? "hidden" : "visible"
                      } text-black dark:text-white`}
                    >
                      <div className="w-full h-6 bg-primary-200 text-sm dark:bg-primary-700 rounded-md flex items-center px-2">{`${
                        allLists[currentListIndex].completed
                          ? allLists[currentListIndex].completed.length
                          : "0"
                      } completed`}</div>
                      <button
                        className="w-6 h-6 text-lg bg-primary-200 dark:bg-primary-700 hover:bg-primary-300 rounded-md flex items-center justify-center"
                        onClick={toggleShowCompleted}
                        data-tip
                        data-for="completedTasks"
                      >
                        {allLists[currentListIndex].showCompleted ? (
                          <BiShow />
                        ) : (
                          <BiHide />
                        )}
                      </button>
                      <ReactTooltip
                        id="completedTasks"
                        effect="solid"
                        place="bottom"
                        backgroundColor="#4b5563"
                      >
                        {allLists[currentListIndex].showCompleted
                          ? "Hide completed tasks"
                          : "Show completed tasks"}
                      </ReactTooltip>
                    </div>
                    <div className="w-full h-2 bg-primary-100 dark:bg-primary-800"></div>
                    <div className="">
                      <div className="overflow-y-auto overflow-hidden h-[calc(100vh-10rem)] pb-16">
                        <div
                          className={`${
                            allLists[currentListIndex].showCompleted
                              ? "visible"
                              : "hidden"
                          } mx-8`}
                        >
                          <h3 className="text-lg mt-2 font-semibold text-primary-600 dark:text-primary-300">
                            Completed tasks:
                          </h3>
                          {allLists[currentListIndex].completed.length !== 0 ? (
                            allLists[currentListIndex].completed.map((task) => (
                              <div key={task.id}>
                                <TaskItem
                                  id={task.id}
                                  title={task.title}
                                  dueDate={task.dueDate}
                                  completed={true}
                                  description={task.description}
                                  today={task.today}
                                  important={task.important}
                                  starred={task.starred}
                                  expanded={task.expanded}
                                  pinned={task.pinned}
                                  updateComponent={updateTaskHandler}
                                  deleteTask={deleteCompletedTaskHandler}
                                  unCompleteTaskHandler={unCompleteTaskHandler}
                                  dragEnabled={false}
                                />
                              </div>
                            ))
                          ) : (
                            <div className="flex items-center gap-1 text-black dark:text-white">
                              <BiInfoCircle />
                              <p className="text-sm">No completed tasks</p>
                            </div>
                          )}
                        </div>
                        <div className="mx-8 mt-2">
                          <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-300">
                            Current tasks:
                          </h3>
                        </div>
                        {taskList.length > 0 ? (
                          <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="reminders">
                              {(provided, snapshot) => (
                                <div
                                  className={`${
                                    snapshot.isDraggingOver
                                      ? "ring-2"
                                      : "ring-none"
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
                        )}
                        <div
                          className={`${
                            currentListIndex < 5 ? "hidden" : "visible"
                          } mx-8 border-2 border-primary-400 dark:border-primary-500 rounded-md min-h-[2.5rem] flex items-center justify-center cursor-pointer border-dashed hover:border-solid hover:bg-primary-200 transition-all dark:hover:bg-primary-700`}
                          onClick={newTaskHandler}
                        >
                          <i className="text-2xl text-primary-600 dark:text-primary-400">
                            <BiPlus />
                          </i>
                          <h3 className="text-primary-600 dark:text-primary-400">
                            Add new task
                          </h3>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full px-8">
                    <div className="flex">
                      <div className="flex-auto">
                        <TagList
                          tags={allLists[currentListIndex].tags}
                          updateTagHandler={updateTagHandler}
                          key={currentListIndex}
                        />
                      </div>
                    </div>
                    <div className="w-full mt-4 h-[calc(100%-206px)] rounded-2xl overflow-hidden">
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
                        key={[darkMode, currentListIndex]}
                        id="tinymce-editor"
                        onEditorChange={handleUpdate}
                        initialValue={allLists[currentListIndex].content}
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
                )
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
