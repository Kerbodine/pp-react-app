import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/navbar/Navbar";

// import "react-calendar/dist/Calendar.css";

import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Reminders from "./components/reminders/Reminders";
import Notes from "./components/notes/Notes";
import ReadingList from "./components/readingList/ReadingList";
import Extras from "./components/Extras";
import Settings from "./components/Settings";
import SidePanel from "./components/sidebar/SidePanel";

// import Login from "./components/Login";

import HashLoader from "react-spinners/HashLoader";
import WorkModeAlert from "./components/ui/WorkModeAlert";

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
import PomodoroAlert from "./components/ui/PomodoroAlert";

function App() {
  const remindersData1 = [
    {
      id: uuidv4(),
      title: "Today",
      color: "blue",
      icon: <BiSun />,
      tasks: [],
      completed: [],
      showCompleted: false,
    },
    {
      id: uuidv4(),
      title: "Priority",
      color: "red",
      icon: <BiCalendarExclamation />,
      tasks: [],
      completed: [],
      showCompleted: false,
    },
    {
      id: uuidv4(),
      title: "Starred",
      color: "yellow",
      icon: <BiStar />,
      tasks: [],
      completed: [],
      showCompleted: false,
    },
    {
      id: uuidv4(),
      title: "All",
      color: "gray",
      icon: <BiArchive />,
      tasks: [],
      completed: [],
      showCompleted: false,
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
          dueDate: Date.now(),

          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos maxime iste illum et deleniti doloribus quas dolorem dicta, accusamus ullam.",
          today: false,
          important: false,
          starred: false,
          expanded: false,
          pinned: true,
        },
        {
          id: uuidv4(),
          title: "Task 2",
          dueDate: Date.now(),

          description: "",
          today: false,
          important: false,
          starred: false,
          expanded: false,
          pinned: false,
        },
      ],
      completed: [],
      showCompleted: false,
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
          dueDate: Date.now(),

          description: "desc 3",
          today: false,
          important: false,
          starred: false,
          expanded: false,
          pinned: true,
        },
        {
          id: uuidv4(),
          title: "Task 4",
          dueDate: Date.now(),

          description: "desc 4",
          today: false,
          important: false,
          starred: false,
          expanded: false,
          pinned: false,
        },
      ],
      completed: [],
      showCompleted: false,
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
          dueDate: Date.now(),

          description: "desc 5",
          today: false,
          important: false,
          starred: false,
          expanded: false,
          pinned: true,
        },
        {
          id: uuidv4(),
          title: "Task 6",
          dueDate: Date.now(),

          description: "desc 6",
          today: false,
          important: false,
          starred: false,
          expanded: false,
          pinned: false,
        },
      ],
      completed: [],
      showCompleted: false,
    },
  ];

  const reminderData2 = [
    {
      id: uuidv4(),
      title: "Today",
      color: "blue",
      icon: <BiSun />,
      tasks: [],
      completed: [],
      showCompleted: false,
    },
    {
      id: uuidv4(),
      title: "Priority",
      color: "red",
      icon: <BiCalendarExclamation />,
      tasks: [],
      completed: [],
      showCompleted: false,
    },
    {
      id: uuidv4(),
      title: "Starred",
      color: "yellow",
      icon: <BiStar />,
      tasks: [],
      completed: [],
      showCompleted: false,
    },
    {
      id: uuidv4(),
      title: "All",
      color: "gray",
      icon: <BiArchive />,
      tasks: [],
      completed: [],
      showCompleted: false,
    },
  ];

  const readingListData1 = [
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
      color: "green",
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

  const readingListData2 = [
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
      color: "green",
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

  let darkModeValue = false;
  let workModeValue = true;

  if (localStorage.getItem("darkMode") !== null) {
    darkModeValue = JSON.parse(localStorage.getItem("darkMode"));
  }

  if (localStorage.getItem("workMode") !== null) {
    workModeValue = JSON.parse(localStorage.getItem("workMode"));
  }

  const [darkMode, setDarkMode] = useState(darkModeValue);
  const [loading, setLoading] = useState(false);
  const [credits, setCredits] = useState(0);
  const [workMode, setWorkMode] = useState(workModeValue);
  const [reminderData, setReminderData] = useState(remindersData1);
  const [readingListData, setReadingListData] = useState(readingListData1);
  const [timerComplete, setTimerComplete] = useState(false);

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

  const toggleWorkMode = () => {
    localStorage.setItem("workMode", !workMode);
    setWorkMode(!workMode);
  };

  useEffect(() => {
    if (workMode) {
      setReminderData(remindersData1);
      setReadingListData(readingListData1);
    } else {
      setReminderData(reminderData2);
      setReadingListData(readingListData2);
    }
  }, [workMode]);

  return (
    <div className={`${darkMode ? "dark" : ""} App overflow-hidden`}>
      {loading ? (
        <div className="text-center justify-center items-center flex w-screen h-screen">
          <HashLoader color={"#3B82F6"} loading={loading} size={75} />
        </div>
      ) : (
        <Router>
          {/* <Login /> */}
          <div className="flex">
            <Navbar />
            <div className="w-full relative">
              <WorkModeAlert workMode={workMode} />
              <PomodoroAlert timerComplete={timerComplete} />
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route
                  path="/reminders"
                  render={(props) => (
                    <Reminders
                      {...props}
                      key={reminderData}
                      remindersData={reminderData}
                      darkMode={darkMode}
                      setReminderData={setReminderData}
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
                      key={readingListData}
                      readingListData={readingListData}
                      setReadingListData={setReadingListData}
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
                onClick={toggleThemeHandler}
                credits={credits}
                setCredits={setCredits}
                workMode={workMode}
                toggleWorkMode={toggleWorkMode}
                setTimerComplete={setTimerComplete}
                reminderData={reminderData}
                setReminderData={setReminderData}
              />
            </div>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
