import React, { useState, useEffect } from "react";
import ReadingListSidebar from "./ReadingListSidebar";
import BookItem from "./BookItem";
import { v4 as uuidv4 } from "uuid";
import { BiChevronDown, BiListUl, BiTrash, BiPlus } from "react-icons/bi";
import ConfirmModal from "../ui/ConfirmModal";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function ReadingList({ readingListData }) {
  const [allLists, setAllLists] = useState(readingListData);
  const [currentListIndex, setCurrentListIndex] = useState(0);
  const [colorDropdown, setColorDropdown] = useState(false);
  const [showColorSelector, setShowColorSelector] = useState(true);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [bookList, setBookList] = useState();

  const updateBookHandler = (
    id,
    bookTitle,
    bookAuthor,
    bookDescription,
    bookRating,
    bookType,
    bookProgress,
    bookStartDate,
    bookEndDate,
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
      startDate: bookStartDate,
      endDate: bookEndDate,
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
      type: "",
      progress: "Not started",
      startDate: null,
      endDate: null,
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
      icon: <BiListUl />,
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
    if (currentListIndex > 4) {
      setBookList(
        allLists.slice(currentListIndex).map((list) =>
          list.books.map((book, index) => (
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
                  />
                </div>
              )}
            </Draggable>
          ))
        )
      );
    }
  }, [currentListIndex, allLists]);

  return (
    <div className="h-screen flex bg-primary dark:bg-primary-900">
      <div className="my-4 mr-4 lg:mr-0 w-full">
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
                    } absolute top-10 -left-2 w-12 bg-white dark:bg-primary-900 rounded-md shadow-md z-10`}
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
                  message={`"${allLists[currentListIndex].title}"`}
                  deleteConfirmation={deleteConfirmation}
                  toggleDeleteConfirmation={toggleDeleteConfirmation}
                  deleteListHandler={deleteListHandler}
                />
              </div>
              <div className="">
                <div className="overflow-y-auto overflow-hidden no-scrollbar h-[calc(100vh-10rem)] pb-16">
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
                  <div
                    className="mx-8 border-2 border-primary-400 dark:border-primary-500 rounded-md min-h-[2.5rem] flex items-center justify-center cursor-pointer border-dashed hover:border-solid hover:bg-primary-200 transition-all dark:hover:bg-primary-700"
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
