import React, { useEffect, useState } from "react";
import { BiTrash, BiCaretUpCircle, BiCaretDownCircle } from "react-icons/bi";

export default function BookItem({
  id,
  title,
  author,
  description,
  rating,
  type,
  progress,
  startDate,
  endDate,
  expanded,
  deleteBook,
  updateComponent,
}) {
  const [bookTitle, setBookTitle] = useState(title);
  const [bookAuthor, setBookAuthor] = useState(author);
  const [bookDescription, setBookDescription] = useState(description);
  const [bookRating, setBookRating] = useState(rating);
  const [bookType, setBookType] = useState(type);
  const [bookProgress, setBookProgress] = useState(progress);
  const [bookStartDate, setBookStartDate] = useState(startDate);
  const [bookEndDate, setBookEndDate] = useState(endDate);
  const [bookExpanded, setBookExpanded] = useState(expanded);

  const titleChangeHandler = (e) => {
    setBookTitle(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setBookDescription(e.target.value);
  };

  const toggleExpandedHandler = () => {
    setBookExpanded(!bookExpanded);
  };

  useEffect(() => {
    updateComponent(
      id,
      bookTitle,
      bookAuthor,
      bookDescription,
      bookRating,
      bookType,
      bookProgress,
      bookStartDate,
      bookEndDate,
      bookExpanded
    );
  }, [
    bookAuthor,
    bookDescription,
    bookEndDate,
    bookExpanded,
    bookProgress,
    bookRating,
    bookStartDate,
    bookTitle,
    bookType,
  ]);

  return (
    <div className="w-full h-auto bg-primary-200 dark:bg-primary-700 flex p-2 rounded-md cursor-pointer">
      <i
        className="text-2xl ml-2 w-6 h-6 my-1 rounded-full flex items-center justify-center text-primary-400 dark:text-primary-500"
        onClick={toggleExpandedHandler}
      >
        {bookExpanded ? <BiCaretUpCircle /> : <BiCaretDownCircle />}
      </i>
      <div className="text-black dark:text-white mx-2 flex-auto flex flex-col">
        <div className="flex items-center h-8">
          <input
            placeholder="Untitled task"
            type="text"
            value={bookTitle}
            onChange={titleChangeHandler}
            className={`w-0 text-lg h-8 flex-auto mr-4 truncate bg-transparent outline-none`}
          ></input>
          <div className="mr-2">
            {/* <DatePicker
              selected={taskDate}
              onChange={(date) => setTaskDate(date)}
              className="bg-primary-100 dark:bg-primary-800 w-24 h-8 text-center px-2 rounded outline-none"
              dateFormat="dd/MM/yyyy"
              placeholderText="Add date"
            /> */}
          </div>
          <div className="flex">
            <div className="w-20 h-4 bg-yellow-400 rounded-b-md"></div>
            <div className="w-20 h-4 bg-green-400 rounded-b-md"></div>
          </div>
        </div>
        <div
          className={`${
            bookExpanded ? "visible" : "hidden"
          } w-full h-auto mt-2`}
        >
          <textarea
            placeholder="Add a description..."
            value={bookDescription}
            onChange={descriptionChangeHandler}
            className="text-sm bg-transparent w-full h-auto outline-none resize-y text-primary-600 dark:text-primary-400 max-h-[12rem]"
          ></textarea>
        </div>
      </div>
      <div className="flex">
        <button
          className="w-8 h-8 flex items-center justify-center rounded-md bg-primary-100 hover:bg-red-400 dark:bg-primary-800 dark:text-white dark:hover:bg-red-400 text-black hover:text-white text-2xl"
          aria-label="delete task"
          onClick={() => {
            deleteBook(id);
          }}
        >
          <BiTrash />
        </button>
      </div>
    </div>
  );
}
