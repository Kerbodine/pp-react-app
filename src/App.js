import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/navbar/Navbar";

// import "react-calendar/dist/Calendar.css";
import HashLoader from "react-spinners/HashLoader";

import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Reminders from "./components/reminders/Reminders";
import Notes from "./components/notes/Notes";
import ReadingList from "./components/readingList/ReadingList";
import Extras from "./components/Extras";
import Settings from "./components/Settings";
import SidePanel from "./components/sidebar/SidePanel";

import { v4 as uuidv4 } from "uuid";
import {
  BiListUl,
  BiSun,
  BiCalendarExclamation,
  BiStar,
  BiArchive,
  BiBookHeart,
  BiTime,
  BiCheckCircle,
  BiBookContent,
} from "react-icons/bi";

function App() {
  const remindersData = [
    {
      id: uuidv4(),
      title: "Today",
      color: "blue",
      icon: <BiSun />,
      tasks: [],
    },
    {
      id: uuidv4(),
      title: "Priority",
      color: "red",
      icon: <BiCalendarExclamation />,
      tasks: [],
    },
    {
      id: uuidv4(),
      title: "Starred",
      color: "yellow",
      icon: <BiStar />,
      tasks: [],
    },
    {
      id: uuidv4(),
      title: "All",
      color: "green",
      icon: <BiArchive />,
      tasks: [],
    },
    {
      id: uuidv4(),
      title: "Reminder List 1",
      color: "red",
      icon: <BiListUl />,
      tasks: [
        {
          id: uuidv4(),
          title: "Task 1",
          completed: false,
          dueDate: Date.now(),
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos maxime iste illum et deleniti doloribus quas dolorem dicta, accusamus ullam.",
          today: false,
          important: false,
          starred: false,
          expanded: false,
          pinned: false,
        },
        {
          id: uuidv4(),
          title: "Task 2",
          completed: false,
          dueDate: Date.now(),
          description: "",
          today: false,
          important: false,
          starred: false,
          expanded: false,
          pinned: false,
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Reminder List 2",
      color: "yellow",
      icon: <BiListUl />,
      tasks: [
        {
          id: uuidv4(),
          title: "Task 3",
          completed: false,
          dueDate: Date.now(),
          description: "desc 3",
          today: false,
          important: false,
          starred: false,
          expanded: false,
          pinned: false,
        },
        {
          id: uuidv4(),
          title: "Task 4",
          completed: false,
          dueDate: Date.now(),
          description: "desc 4",
          today: false,
          important: false,
          starred: false,
          expanded: false,
          pinned: false,
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Reminder List 3",
      color: "purple",
      icon: <BiListUl />,
      tasks: [
        {
          id: uuidv4(),
          title: "Task 5",
          completed: false,
          dueDate: Date.now(),
          description: "desc 5",
          today: false,
          important: false,
          starred: false,
          expanded: false,
          pinned: false,
        },
        {
          id: uuidv4(),
          title: "Task 6",
          completed: false,
          dueDate: Date.now(),
          description: "desc 6",
          today: false,
          important: false,
          starred: false,
          expanded: false,
          pinned: false,
        },
      ],
    },
  ];

  const readingListData = [
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

  let darkModeValue = false;

  if (localStorage.getItem("darkMode") !== null) {
    darkModeValue = JSON.parse(localStorage.getItem("darkMode"));
  }

  const [darkMode, setDarkMode] = useState(darkModeValue);
  const [loading, setLoading] = useState(false);
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const toggleThemeHandler = () => {
    localStorage.setItem("darkMode", !darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <div className="App overflow-hidden">
      {loading ? (
        <div className="text-center justify-center items-center flex w-screen h-screen">
          <HashLoader color={"#3B82F6"} loading={loading} size={75} />
        </div>
      ) : (
        <Router>
          <div className="flex">
            <Navbar darkMode={darkMode} />
            <div className="flex-auto">
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route
                  path="/reminders"
                  render={(props) => (
                    <Reminders
                      {...props}
                      darkMode={darkMode}
                      remindersData={remindersData}
                    />
                  )}
                />
                <Route
                  path="/notes"
                  render={(props) => <Notes {...props} darkMode={darkMode} />}
                />
                <Route
                  path="/reading-list"
                  render={(props) => (
                    <ReadingList
                      {...props}
                      darkMode={darkMode}
                      readingListData={readingListData}
                    />
                  )}
                />
                <Route path="/extensions" component={Extras} />
                <Route path="/profile" component={Profile} />
                <Route path="/settings" component={Settings} />
              </Switch>
            </div>
            <div className="w-0 lg:w-72">
              <SidePanel
                darkMode={darkMode}
                onClick={toggleThemeHandler}
                credits={credits}
                setCredits={setCredits}
              />
            </div>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
