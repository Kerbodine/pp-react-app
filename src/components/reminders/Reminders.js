import React, { useState, useEffect } from "react";
import ReminderSidebar from "./ReminderSidebar";
import TaskItem from "./TaskItem";
import { v4 as uuidv4 } from "uuid";
import { BiTrash, BiListUl, BiChevronDown, BiPlus } from "react-icons/bi";
import ConfirmModal from "../ui/ConfirmModal";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Reminders({ remindersData, darkMode }) {
  const [allLists, setAllLists] = useState(remindersData);
  const [currentListIndex, setCurrentListIndex] = useState(0);
  const [taskList, setTaskList] = useState();
  const [colorDropdown, setColorDropdown] = useState(false);
  const [showColorSelector, setShowColorSelector] = useState(true);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const updateTaskHandler = (
    id,
    completed,
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
      completed: completed,
      dueDate: dueDate,
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
  const handleColorDropdown = () => {
    setColorDropdown(!colorDropdown);
  };

  // Function to update color for current list
  const listColorHandler = (newColor) => {
    let temp = allLists;
    temp[currentListIndex].color = newColor;
    setAllLists([...temp]);
    setColorDropdown(false);
  };

  // Function to change list title
  const titleChangeHandler = (e) => {
    if (currentListIndex >= 4) {
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

  // Adding a new task to the end of currentList.tasks
  const newTaskHandler = () => {
    let today = false;
    let important = false;
    let starred = false;
    switch (currentListIndex) {
      case 0:
        today = true;
        break;
      case 1:
        important = true;
        break;
      case 2:
        starred = true;
        break;
      default:
        break;
    }
    let temp = allLists;
    temp[currentListIndex].tasks.push({
      id: uuidv4(),
      title: "",
      completed: false,
      dueDate: null,
      description: "",
      today: today,
      important: important,
      starred: starred,
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

  useEffect(() => {
    if (currentListIndex < 4) {
      setShowColorSelector(false);
    } else {
      setShowColorSelector(true);
    }
  }, [currentListIndex]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(allLists[currentListIndex].tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    let temp = allLists;
    temp[currentListIndex].tasks = [...items];

    setAllLists([...temp]);
  };

  useEffect(() => {
    const todayFilter = (task) =>
      task.today === true && task.completed === false;
    const importantFilter = (task) =>
      task.important === true && task.completed === false;
    const starredFilter = (task) =>
      task.starred === true && task.completed === false;
    const allTaskFilter = (task) => task.completed === false;

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
        taskFilter = allTaskFilter;
        break;
      default:
        sliceStart = currentListIndex;
        sliceEnd = currentListIndex + 1;
        taskFilter = allTaskFilter;
        break;
    }

    setTaskList(
      allLists.slice(sliceStart, sliceEnd).map((task) =>
        task.tasks.filter(taskFilter).map((task, index) => (
          <Draggable
            key={task.id}
            draggableId={task.id}
            index={index}
            isDragDisabled={currentListIndex < 4}
          >
            {(provided, snapshot) => (
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <TaskItem
                  id={task.id}
                  title={task.title}
                  completed={task.completed}
                  dueDate={task.dueDate}
                  description={task.description}
                  today={task.today}
                  important={task.important}
                  starred={task.starred}
                  expanded={task.expanded}
                  pinned={task.pinned}
                  updateComponent={updateTaskHandler}
                  deleteTask={deleteTaskHandler}
                  isDragging={snapshot.isDragging}
                />
              </div>
            )}
          </Draggable>
        ))
      )
    );
  }, [currentListIndex, allLists]);

  const toggleDeleteConfirmation = () => {
    setDeleteConfirmation(!deleteConfirmation);
  };

  return (
    <div className="h-screen flex bg-primary dark:bg-primary-900">
      <div className="my-4 mr-4 lg:mr-0 w-full">
        <div className="h-full rounded-2xl flex overflow-hidden">
          <div className="h-full">
            <div className="w-0 md:w-48 bg-primary-200 dark:bg-primary-700 h-full">
              <ReminderSidebar
                allLists={allLists}
                selectList={selectListHandler}
                newListHandler={newListHandler}
              />
            </div>
          </div>
          <div className="w-full h-full">
            <div className="bg-primary-100 dark:bg-primary-800 h-full">
              <div
                className={`w-full h-12 bg-${allLists[currentListIndex].color}-400`}
              ></div>
              <div className="h-12 m-8 flex flex-row items-center">
                <input
                  className="flex-auto bg-transparent truncate text-black dark:text-white font-bold outline-none text-4xl"
                  autoComplete="off"
                  value={allLists[currentListIndex].title}
                  onChange={titleChangeHandler}
                  type="text"
                  aria-label="list title"
                ></input>
                <div
                  className={`${
                    showColorSelector ? "visible" : "hidden"
                  } relative w-8 h-8 rounded-full bg-${
                    allLists[currentListIndex].color
                      ? `${allLists[currentListIndex].color}-400 text-white`
                      : "primary-200 text-black"
                  } text-2xl flex items-center justify-center hover:bg-${
                    allLists[currentListIndex].color
                  }-400/80`}
                  onClick={handleColorDropdown}
                >
                  <BiChevronDown />
                  <div
                    className={`${
                      colorDropdown ? "visible" : "hidden"
                    } absolute top-10 -left-2 w-12 bg-white dark:bg-primary-600 rounded-md shadow-md`}
                  >
                    <div
                      className="w-8 h-8 m-2 rounded-full bg-red-400 hover:bg-red-400/80"
                      onClick={() => listColorHandler("red")}
                    ></div>
                    <div
                      className="w-8 h-8 m-2 rounded-full bg-yellow-400 hover:bg-yellow-400/80"
                      onClick={() => listColorHandler("yellow")}
                    ></div>
                    <div
                      className="w-8 h-8 m-2 rounded-full bg-green-400 hover:bg-green-400/80"
                      onClick={() => listColorHandler("green")}
                    ></div>
                    <div
                      className="w-8 h-8 m-2 rounded-full bg-blue-400 hover:bg-blue-400/80"
                      onClick={() => listColorHandler("blue")}
                    ></div>
                    <div
                      className="w-8 h-8 m-2 rounded-full bg-purple-400 hover:bg-purple-400/80"
                      onClick={() => listColorHandler("purple")}
                    ></div>
                    <div
                      className="w-8 h-8 m-2 rounded-full bg-gray-400 hover:bg-gray-400/80"
                      onClick={() => listColorHandler("gray")}
                    ></div>
                    <div
                      className="w-8 h-8 m-2 rounded-full border-gray-400 border-2 hover:bg-gray-200"
                      onClick={() => listColorHandler(false)}
                    ></div>
                  </div>
                </div>
                <div
                  className={`${
                    showColorSelector ? "visible" : "hidden"
                  } relative w-8 h-8 rounded-full bg-primary-200 hover:bg-red-400 dark:bg-primary-700 dark:text-white dark:hover:bg-red-400 text-black hover:text-white text-2xl ml-2 flex items-center justify-center`}
                  onClick={toggleDeleteConfirmation}
                >
                  <BiTrash />
                </div>
                <ConfirmModal
                  darkMode={darkMode}
                  message={`"${allLists[currentListIndex].title}"`}
                  deleteConfirmation={deleteConfirmation}
                  toggleDeleteConfirmation={toggleDeleteConfirmation}
                  deleteListHandler={deleteListHandler}
                />
              </div>
              <div className="">
                <div className="overflow-y-auto overflow-hidden h-[calc(100vh-10rem)] pb-16">
                  <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="reminders">
                      {(provided, snapshot) => (
                        <div
                          className={`${
                            snapshot.isDraggingOver ? "ring-2" : "ring-none"
                          } ring-primary-300 dark:ring-primary-600 mx-4 mb-4 mt-1 px-4 pt-4 pb-2 rounded-md flex flex-col`}
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {taskList}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                  <div
                    className="mx-8 border-2 border-primary-400 dark:border-primary-500 rounded-md min-h-[2.5rem] flex items-center justify-center cursor-pointer border-dashed hover:border-solid hover:bg-primary-200 transition-all dark:hover:bg-primary-700"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
