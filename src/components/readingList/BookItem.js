import React, { useEffect, useState } from "react";
import {
  BiTrash,
  BiCaretUpCircle,
  BiCaretDownCircle,
  BiChevronDown,
  BiChevronUp,
} from "react-icons/bi";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";

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
  const [progressColor, setProgressColor] = useState();
  const [progressDropDown, setProgressDropDown] = useState();

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

  useEffect(() => {
    switch (bookProgress) {
      case "In progress":
        setProgressColor("yellow");
        break;
      case "Complete":
        setProgressColor("green");
        break;
      default:
        setProgressColor("red");
        break;
    }
  }, [bookProgress]);

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
          <div className="flex text-black dark:text-white gap-2 items-center">
            <div
              className={`text-sm rounded-full bg-${progressColor}-400 flex px-2 py-1 flex items-center`}
            >
              <div className="text-white text-lg">
                {progressDropDown ? <BiChevronDown /> : <BiChevronUp />}
              </div>
              <p className="text-white">{bookProgress}</p>
            </div>
            <div className="w-auto h-8 bg-primary-100 dark:bg-primary-800 rounded-md flex items-center pt-1.5 px-2">
              <Rating
                initialRating={bookRating}
                fractions={2}
                emptySymbol={
                  <FaRegStar className="text-primary-400 dark:text-primary-500 text-lg" />
                }
                fullSymbol={<FaRegStar className="text-lg" />}
                onChange={(rate) => {
                  setBookRating(rate);
                }}
              />
            </div>
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
