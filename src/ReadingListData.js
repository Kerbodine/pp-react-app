import {
  BiTime,
  BiCheckCircle,
  BiBookContent,
  BiBookHeart,
  BiArchive,
  BiListUl,
} from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

export const readingListCategories = [
  {
    id: uuidv4(),
    title: "In progress",
    color: "amber",
    icon: <BiTime />,
    books: [],
  },
  {
    id: uuidv4(),
    title: "Completed",
    color: "emerald",
    icon: <BiCheckCircle />,
    books: [],
  },
  {
    id: uuidv4(),
    title: "Book type",
    color: "blue",
    icon: <BiBookContent />,
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
    title: "All",
    color: "gray",
    icon: <BiArchive />,
    books: [],
  },
];

export const readingListInfo = [
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
        type: "Paperback",
        progress: "Complete",
        favorite: false,
        expanded: false,
      },
    ],
  },
];
