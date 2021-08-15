import React, { useState, useEffect } from "react";
import ReadingListSidebar from "./ReadingListSidebar";
import BookItem from "./BookItem";
import { v4 as uuidv4 } from "uuid";
import {
  BiBookHeart,
  BiTime,
  BiCheckCircle,
  BiBookContent,
  BiArchive,
  BiChevronDown,
  BiBook,
  BiTrash,
  BiPlus,
  BiListUl,
} from "react-icons/bi";
import ConfirmModal from "../ui/ConfirmModal";

export default function ReadingList({ darkMode }) {
  const data = [
    {
      id: uuidv4(),
      title: "In progress",
      color: "yellow",
      icon: <BiTime />,
      books: [],
    },
    {
      id: uuidv4(),
      title: "Finished",
      color: "blue",
      icon: <BiCheckCircle />,
      books: [],
    },
    {
      id: uuidv4(),
      title: "Favorites",
      color: "pink",
      icon: <BiBookHeart />,
      books: [],
    },
    {
      id: uuidv4(),
      title: "Book type",
      color: "purple",
      icon: <BiBookContent />,
      books: [],
    },
    {
      id: uuidv4(),
      title: "All",
      color: "green",
      icon: <BiArchive />,
      books: [],
    },
    {
      id: uuidv4(),
      title: "School reading",
      color: "red",
      icon: <BiListUl />,
      books: [
        {
          id: uuidv4(),
          title: "Book 1",
          author: "author 1",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore voluptates optio aliquid autem consequuntur quos architecto provident corrupti officia! Iure.",
          rating: 5,
          type: "Audiobook",
          progress: "In progress",
          startDate: null,
          endDate: null,
          favorite: false,
          expanded: true,
        },
        {
          id: uuidv4(),
          title: "Book 2",
          author: "author 2",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore voluptates optio aliquid autem consequuntur quos architecto provident corrupti officia! Iure.",
          rating: 4,
          type: "Printed copy",
          progress: "Complete",
          startDate: null,
          endDate: null,
          favorite: false,
          expanded: false,
        },
      ],
    },
  ];

  const [allLists, setAllLists] = useState(data);
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

  useEffect(() => {
    if (currentListIndex > 4) {
      setBookList(
        allLists.slice(currentListIndex).map((list) =>
          list.books.map((book) => (
            <div key={book.id}>
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
              />
            </div>
          ))
        )
      );
    }
  }, [currentListIndex, allLists]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
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
                <div className="mx-8">
                  <div className="overflow-y-auto overflow-hidden no-scrollbar h-[calc(100vh-10rem)] flex flex-col gap-2 pb-16">
                    {bookList}
                    <div
                      className="w-full border-2 border-primary-400 dark:border-primary-500 rounded-md min-h-[2.5rem] flex items-center justify-center cursor-pointer border-dashed hover:border-solid hover:bg-gray-200 transition-all dark:hover:bg-primary-700"
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
    </div>
  );
}
