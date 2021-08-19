import React, { useEffect, useState } from "react";
import {
  BiTrash,
  BiCaretRightCircle,
  BiCaretDownCircle,
  BiChevronLeft,
  BiChevronRight,
  BiHeart,
} from "react-icons/bi";
import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";

export default function BookItem({
  id,
  title,
  author,
  description,
  rating,
  type,
  progress,
  expanded,
  deleteBook,
  updateComponent,
  isDragging,
  favorite,
}) {
  const [bookTitle, setBookTitle] = useState(title);
  const [bookAuthor, setBookAuthor] = useState(author);
  const [bookDescription, setBookDescription] = useState(description);
  const [bookRating, setBookRating] = useState(rating);
  const [bookType, setBookType] = useState(type);
  const [bookProgress, setBookProgress] = useState(progress);
  const [bookExpanded, setBookExpanded] = useState(expanded);
  const [progressColor, setProgressColor] = useState();
  const [bookFavorite, setBookFavorite] = useState(favorite);

  const titleChangeHandler = (e) => {
    setBookTitle(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setBookDescription(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setBookAuthor(e.target.value);
  };

  const toggleExpandedHandler = () => {
    setBookExpanded(!bookExpanded);
  };

  const toggleFavoriteHandler = () => {
    setBookFavorite(!bookFavorite);
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
      bookFavorite,
      bookExpanded
    );
  }, [
    bookAuthor,
    bookDescription,
    bookExpanded,
    bookProgress,
    bookRating,
    bookTitle,
    bookFavorite,
    bookType,
  ]);

  const progressSelect = (step) => {
    const progressArray = ["Not started", "In progress", "Complete"];
    let progressIndex = progressArray.indexOf(bookProgress);
    progressIndex = (progressIndex + step) % progressArray.length;
    setBookProgress(progressArray[progressIndex]);
  };

  const bookTypeSelect = (step) => {
    const progressArray = ["Paperback", "E-book", "Audiobook", "Article"];
    let progressIndex = progressArray.indexOf(bookType);
    progressIndex = (progressIndex + step) % progressArray.length;
    setBookType(progressArray[progressIndex]);
  };

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
    <div
      className={`w-full h-auto bg-primary-200 dark:bg-primary-700 flex p-2 rounded-md cursor-pointer mb-2 ${
        isDragging ? "shadow-lg" : ""
      }`}
    >
      <i
        className="text-2xl ml-2 w-6 h-6 my-1 rounded-full flex items-center justify-center text-primary-400 dark:text-primary-500"
        onClick={toggleExpandedHandler}
      >
        {bookExpanded ? <BiCaretDownCircle /> : <BiCaretRightCircle />}
      </i>
      <div className="text-black dark:text-white ml-2 flex-auto flex flex-col">
        <div className="flex items-center h-8">
          <input
            placeholder="Untitled book"
            type="text"
            value={bookTitle}
            onChange={titleChangeHandler}
            className={`w-0 text-lg h-8 flex-auto mr-4 truncate bg-transparent outline-none`}
          ></input>
          <div className="flex text-black dark:text-white gap-2 items-center">
            <div className="flex flex-col relative">
              <div
                className={`text-sm rounded-md border-[3px] border-${progressColor}-400 box-border flex w-28 h-8 flex items-center overflow-hidden`}
              >
                <div
                  className={`text-white text-lg w-8 h-full flex items-center justify-center`}
                  onClick={() => {
                    progressSelect(2);
                  }}
                >
                  <BiChevronLeft />
                </div>
                <p className="text-white cursor-pointer w-full text-center noselect">
                  {bookProgress}
                </p>
                <div
                  className={`text-white text-lg w-8 h-full flex items-center justify-center`}
                  onClick={() => {
                    progressSelect(1);
                  }}
                >
                  <BiChevronRight />
                </div>
              </div>
            </div>
            <button
              className={`${
                bookFavorite ? "!bg-pink-400 text-white" : ""
              } w-8 h-8 flex items-center justify-center rounded-md bg-primary-100 hover:bg-pink-400 dark:bg-primary-800 dark:text-white dark:hover:bg-pink-400 text-black hover:text-white text-2xl`}
              onClick={toggleFavoriteHandler}
            >
              <BiHeart />
            </button>
          </div>
        </div>
        <div
          className={`${
            bookExpanded ? "visible" : "hidden"
          } w-full h-auto mt-2 flex`}
        >
          <div className="flex flex-col flex-auto">
            <div className="flex text-sm">
              <h4>Author:</h4>
              <input
                className="bg-transparent ml-2 outline-none"
                placeholder="Author name"
                value={bookAuthor}
                onChange={authorChangeHandler}
              ></input>
            </div>
            <textarea
              placeholder="Add a description..."
              value={bookDescription}
              onChange={descriptionChangeHandler}
              className="text-sm bg-transparent mt-1 h-full min-h-[48px] outline-none resize-y text-primary-700 dark:text-primary-300 max-h-[12rem]"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <div
              className={`text-sm rounded-md ml-2 bg-primary-100 dark:bg-primary-800 text-black dark:text-white flex w-28 h-8 flex items-center overflow-hidden`}
            >
              <div
                className={`text-lg w-8 h-full flex items-center justify-center`}
                onClick={() => {
                  bookTypeSelect(3);
                }}
              >
                <BiChevronLeft />
              </div>
              <p className="cursor-pointer w-full text-center noselect">
                {bookType === null ? (
                  <p className="text-primary-500 dark:text-primary-400">
                    Select type
                  </p>
                ) : (
                  bookType
                )}
              </p>
              <div
                className={`text-lg w-8 h-full flex items-center justify-center`}
                onClick={() => {
                  bookTypeSelect(1);
                }}
              >
                <BiChevronRight />
              </div>
            </div>
            <div className="w-28 mt-2 justify-center ml-2 h-8 bg-primary-100 dark:bg-primary-800 rounded-md flex items-center pt-1.5">
              <Rating
                initialRating={bookRating}
                fractions={2}
                emptySymbol={
                  <FaRegStar className="text-primary-400 dark:text-primary-500 text-xl" />
                }
                fullSymbol={<FaRegStar className="text-xl" />}
                onChange={(rate) => {
                  setBookRating(rate);
                }}
              />
            </div>
          </div>
          <button
            className="ml-2 w-8 h-8 flex items-center justify-center rounded-md bg-primary-100 hover:bg-red-400 dark:bg-primary-800 dark:text-white dark:hover:bg-red-400 text-black hover:text-white text-2xl"
            aria-label="delete task"
            onClick={() => {
              deleteBook(id);
            }}
          >
            <BiTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
