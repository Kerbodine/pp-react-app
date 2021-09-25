import React, { useState, useEffect, useContext } from "react";
import ReadingListSidebar from "./ReadingListSidebar";
import BookItem from "./BookItem";
import { v4 as uuidv4 } from "uuid";
import {
  BiPlus,
  BiCaretDownCircle,
  BiCaretUpCircle,
  BiInfoCircle,
  BiBook,
} from "react-icons/bi";
import ConfirmModal from "../ui/ConfirmModal";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import UserContext from "../../UserContext";
import ListOptionsPanel from "../ui/ListOptionsPanel";

export default function ReadingList({
  readingListData,
  setReadingListData,
  readingListIndex,
  setReadingListIndex,
}) {
  const [allLists, setAllLists] = useState(readingListData);
  const [currentListIndex, setCurrentListIndex] = useState(readingListIndex);
  const [settingsDropdown, setSettingsDropdown] = useState(false);
  const [showColorSelector, setShowColorSelector] = useState(true);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [bookList, setBookList] = useState([]);
  const [bookTypeFilter, setBookTypeFilter] = useState("Paperback");
  const [typeDropdown, setTypeDropdown] = useState(false);

  const toggleTypeDropdown = () => {
    setTypeDropdown(!typeDropdown);
  };

  const setBookType = (type) => {
    setBookTypeFilter(type);
    setTypeDropdown(false);
  };

  const { userData } = useContext(UserContext);

  const updateBookHandler = (
    id,
    bookTitle,
    bookAuthor,
    bookDescription,
    bookRating,
    bookType,
    bookProgress,
    bookFavorite,
    bookExpanded
  ) => {
    let tempTask = {
      id: id,
      title: bookTitle,
      author: bookAuthor,
      description: bookDescription,
      rating: bookRating,
      type: bookType,
      progress: bookProgress,
      favorite: bookFavorite,
      expanded: bookExpanded,
    };
    allLists.forEach((list, i) =>
      list.books.forEach((task, j) => {
        if (task.id === tempTask.id) {
          let temp = allLists;
          temp[i].books[j] = tempTask;
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
  const deleteBookHandler = (id) => {
    allLists.forEach((list, i) =>
      list.books.forEach((task, j) => {
        if (task.id === id) {
          let temp = allLists;
          temp[i].books.splice(j, 1);
          setAllLists([...temp]);
        }
      })
    );
  };

  const newBookHandler = () => {
    let temp = allLists;
    temp[currentListIndex].books.push({
      id: uuidv4(),
      title: "",
      author: "",
      description: "",
      rating: null,
      type: null,
      progress: "Not started",
      favorite: false,
      expanded: true,
    });
    setAllLists([...temp]);
  };

  // Adding a new list to the end of allLists
  const newListHandler = () => {
    const newList = {
      id: uuidv4(),
      title: "Untitled list",
      color: "gray",
      icon: <BiBook />,
      books: [],
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

  const toggleDeleteConfirmation = () => {
    setDeleteConfirmation(!deleteConfirmation);
  };

  useEffect(() => {
    if (currentListIndex < 5) {
      setShowColorSelector(false);
    } else {
      setShowColorSelector(true);
    }
  }, [currentListIndex]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(allLists[currentListIndex].books);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    let temp = allLists;
    temp[currentListIndex].books = [...items];

    setAllLists([...temp]);
  };

  useEffect(() => {
    const inProgressFilter = (task) => task.progress === "In progress";
    const completedFilter = (task) => task.progress === "Complete";
    const favoritesFilter = (task) => task.favorite === true;
    const bookFilter = (task) => task.type === bookTypeFilter;
    const allTaskFilter = (task) => task;

    let taskFilter;
    let sliceStart;
    let sliceEnd;

    switch (currentListIndex) {
      case 0:
        taskFilter = inProgressFilter;
        break;
      case 1:
        taskFilter = completedFilter;
        break;
      case 2:
        taskFilter = bookFilter;
        break;
      case 3:
        taskFilter = favoritesFilter;
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
    setBookList(
      allLists
        .slice(sliceStart, sliceEnd)
        .map((list) =>
          list.books.filter(taskFilter).map((book, index) => (
            <Draggable
              key={book.id}
              draggableId={book.id}
              index={index}
              isDragDisabled={currentListIndex < 5}
            >
              {(provided, snapshot) => (
                <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  <BookItem
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    description={book.description}
                    rating={book.rating}
                    type={book.type}
                    progress={book.progress}
                    startDate={book.startDate}
                    endDate={book.endDate}
                    favorite={book.favorite}
                    expanded={book.expanded}
                    updateComponent={updateBookHandler}
                    deleteBook={deleteBookHandler}
                    isDragging={snapshot.isDragging}
                    dragEnabled={currentListIndex > 4 ? true : false}
                  />
                </div>
              )}
            </Draggable>
          ))
        )
        .filter((book) => book.length !== 0)
    );
  }, [currentListIndex, allLists, bookTypeFilter]);

  useEffect(() => {
    setReadingListData(allLists);
  });

  useEffect(() => {
    setReadingListIndex(currentListIndex);
  }, [currentListIndex]);

  return (
    <div className="h-screen flex bg-primary dark:bg-primary-900">
      <div className="my-4 w-full">
        <div className="h-full rounded-2xl flex overflow-hidden">
          <div className="h-full">
            <div className="w-0 md:w-48 bg-primary-200 dark:bg-primary-700 h-full">
              <ReadingListSidebar
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
              <div className="h-12 mx-8 mt-8 flex flex-row items-center">
                <input
                  className="flex-auto bg-transparent truncate text-black dark:text-white font-bold outline-none text-4xl"
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
                  message={`"${allLists[currentListIndex].title}"`}
                  deleteConfirmation={deleteConfirmation}
                  toggleDeleteConfirmation={toggleDeleteConfirmation}
                  deleteListHandler={deleteListHandler}
                />
              </div>
              <div className="">
                <div
                  className={`${
                    currentListIndex === 2 ? "visible" : "hidden"
                  } h-6 px-8 text-black dark:text-white relative`}
                >
                  <div className="w-36 h-6 bg-primary-200 dark:bg-primary-700 text-sm flex items-center px-2 rounded-md">
                    <p className="flex-auto">Filter: {bookTypeFilter}</p>
                    {typeDropdown ? (
                      <BiCaretDownCircle
                        className="ml-2 text-lg"
                        onClick={toggleTypeDropdown}
                      />
                    ) : (
                      <BiCaretUpCircle
                        className="ml-2 text-lg"
                        onClick={toggleTypeDropdown}
                      />
                    )}
                  </div>
                  <div
                    className={`${
                      typeDropdown ? "visible" : "hidden"
                    } absolute w-36 noselect h-24 top-8 rounded-md bg-white dark:bg-primary-600 shadow-md text-sm flex flex-col overflow-hidden`}
                  >
                    <div
                      className="w-full h-6 flex items-center hover:bg-primary-100 dark:hover:bg-primary-500 cursor-pointer px-2"
                      onClick={() => setBookType("Paperback")}
                    >
                      Paperback
                    </div>
                    <div
                      className="w-full h-6 flex items-center hover:bg-primary-100 dark:hover:bg-primary-500 cursor-pointer px-2"
                      onClick={() => setBookType("E-book")}
                    >
                      E-book
                    </div>
                    <div
                      className="w-full h-6 flex items-center hover:bg-primary-100 dark:hover:bg-primary-500 cursor-pointer px-2"
                      onClick={() => setBookType("Audiobook")}
                    >
                      Audiobook
                    </div>
                    <div
                      className="w-full h-6 flex items-center hover:bg-primary-100 dark:hover:bg-primary-500 cursor-pointer px-2"
                      onClick={() => setBookType("Article")}
                    >
                      Article
                    </div>
                  </div>
                </div>
                <div className="overflow-y-auto overflow-hidden no-scrollbar h-[calc(100vh-10rem)] pb-16">
                  {bookList.length > 0 ? (
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
                            {bookList}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </DragDropContext>
                  ) : (
                    <div className="flex items-center ml-8 mb-4 text-black dark:text-white">
                      <BiInfoCircle />
                      <p className="ml-1 text-sm">No books to show</p>
                    </div>
                  )}
                  <div
                    className={`${
                      currentListIndex > 4 ? "visible" : "hidden"
                    } mx-8 border-2 border-primary-400 dark:border-primary-500 rounded-md min-h-[2.5rem] flex items-center justify-center cursor-pointer border-dashed hover:border-solid hover:bg-primary-200 transition-all dark:hover:bg-primary-700`}
                    onClick={newBookHandler}
                  >
                    <i className="text-2xl text-primary-600 dark:text-primary-400">
                      <BiPlus />
                    </i>
                    <h3 className="text-primary-600 dark:text-primary-400">
                      Add new book
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
