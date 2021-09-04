import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Reminders from "./components/reminders/Reminders";
import Notes from "./components/notes/Notes";
import ReadingList from "./components/readingList/ReadingList";
import Extras from "./components/Extras";
import SettingsPage from "./components/settings/SettingsPage";
import SidePanel from "./components/sidebar/SidePanel";
import PulseLoader from "react-spinners/PulseLoader";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import PomodoroAlert from "./components/ui/PomodoroAlert";
// import Login from "./components/Login";
import { SettingsProvider } from "./components/settings/SettingsContext";
import { UserProvider } from "./UserContext";

import {
  BiListUl,
  BiSun,
  BiStar,
  BiArchive,
  BiBookHeart,
  BiTime,
  BiCheckCircle,
  BiBookContent,
  BiPin,
} from "react-icons/bi";

function App() {
  const reminderCategories = [
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
      icon: <HiOutlineExclamationCircle />,
      tasks: [],
      completed: [],
      showCompleted: false,
    },
    {
      id: uuidv4(),
      title: "Starred",
      color: "amber",
      icon: <BiStar />,
      tasks: [],
      completed: [],
      showCompleted: false,
    },
    {
      id: uuidv4(),
      title: "Pinned",
      color: "indigo",
      icon: <BiPin />,
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

  const remindersData1 = [
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
      color: "amber",
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

  const readingListCategories = [
    {
      id: uuidv4(),
      title: "In progress",
      color: "amber",
      icon: <BiTime />,
      books: [],
    },
    {
      id: uuidv4(),
      title: "Finished",
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

  const readingListData1 = [
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

  let remindersListIndex = 0;
  if (localStorage.getItem("reminderIndex") !== null) {
    remindersListIndex = JSON.parse(localStorage.getItem("reminderIndex"));
  }
  const setReminderListIndex = (index) => {
    remindersListIndex = index;
    // localStorage.setItem("reminderIndex", remindersListIndex);
  };

  let notesListIndex = 0;
  if (localStorage.getItem("notesIndex") !== null) {
    notesListIndex = JSON.parse(localStorage.getItem("notesIndex"));
  }
  const setNotesListIndex = (index) => {
    notesListIndex = index;
    // localStorage.setItem("notesIndex", notesListIndex);
  };

  let readingListIndex = 0;
  if (localStorage.getItem("readingIndex") !== null) {
    readingListIndex = JSON.parse(localStorage.getItem("readingIndex"));
  }
  const setReadingListIndex = (index) => {
    readingListIndex = index;
    // localStorage.setItem("readingIndex", readingListIndex);
  };

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode")
      ? JSON.parse(localStorage.getItem("darkMode"))
      : false
  );

  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    localStorage.getItem("sidebarCollapsed")
      ? JSON.parse(localStorage.getItem("sidebarCollapsed"))
      : true
  );

  const toggleSidebarCollapsed = () => {
    localStorage.setItem("sidebarCollapsed", !sidebarCollapsed);
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleThemeHandler = () => {
    localStorage.setItem("darkMode", !darkMode);
    setDarkMode(!darkMode);
  };

  const [sidebarGreeting, setSidebarGreeting] = useState(
    localStorage.getItem("sidebarGreeting")
      ? JSON.parse(localStorage.getItem("sidebarGreeting"))
      : true
  );

  const toggleGreetingHandler = () => {
    localStorage.setItem("sidebarGreeting", !sidebarGreeting);
    setSidebarGreeting(!sidebarGreeting);
  };

  const [sidebarCalendar, setSidebarCalendar] = useState(
    localStorage.getItem("sidebarCalendar")
      ? JSON.parse(localStorage.getItem("sidebarCalendar"))
      : true
  );

  const toggleCalendarHandler = () => {
    localStorage.setItem("sidebarCalendar", !sidebarCalendar);
    setSidebarCalendar(!sidebarCalendar);
  };

  const [sidebarPomodoro, setSidebarPomodoro] = useState(
    localStorage.getItem("sidebarPomodoro")
      ? JSON.parse(localStorage.getItem("sidebarPomodoro"))
      : true
  );

  const togglePomodoroHandler = () => {
    localStorage.setItem("sidebarPomodoro", !sidebarPomodoro);
    setSidebarPomodoro(!sidebarPomodoro);
  };

  const [sidebarTasks, setSidebarTasks] = useState(
    localStorage.getItem("sidebarTasks")
      ? JSON.parse(localStorage.getItem("sidebarTasks"))
      : true
  );

  const toggleSidebarTasks = () => {
    localStorage.setItem("sidebarTasks", !sidebarTasks);
    setSidebarTasks(!sidebarTasks);
  };

  const [sidebarNotes, setSidebarNotes] = useState(
    localStorage.getItem("sidebarNotes")
      ? JSON.parse(localStorage.getItem("sidebarNotes"))
      : true
  );

  const toggleSidebarNotes = () => {
    localStorage.setItem("sidebarTasks", !sidebarNotes);
    setSidebarNotes(!sidebarNotes);
  };

  const [loading, setLoading] = useState(false);
  const [credits, setCredits] = useState(0);
  const [reminderData, setReminderData] = useState([
    ...reminderCategories,
    ...remindersData1,
  ]);
  const [readingListData, setReadingListData] = useState([
    ...readingListCategories,
    ...readingListData1,
  ]);
  const [timerComplete, setTimerComplete] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const userData = {
    username: "Username",
  };

  const settingsContextData = {
    darkMode: darkMode,
    setDarkMode: toggleThemeHandler,
    sidebarCollapsed: sidebarCollapsed,
    setSidebarCollapsed: toggleSidebarCollapsed,
    sidebarGreeting: sidebarGreeting,
    setSidebarGreeting: toggleGreetingHandler,
    sidebarCalendar: sidebarCalendar,
    setSidebarCalendar: toggleCalendarHandler,
    sidebarPomodoro: sidebarPomodoro,
    setSidebarPomodoro: togglePomodoroHandler,
    sidebarTasks: sidebarTasks,
    setSidebarTasks: toggleSidebarTasks,
    sidebarNotes: sidebarNotes,
    setSidebarNotes: toggleSidebarNotes,
    notificationTasks: true,
    notificationPomodoro: true,
    notificationEvent: true,
    reminderToday: true,
    reminderImportant: true,
    reminderStarred: true,
    reminderAll: true,
    readingProgress: true,
    readingComplete: true,
    readingType: true,
    readingFavorite: true,
    readingAll: true,
  };

  return (
    <div className={`${darkMode ? "dark" : ""} App overflow-hidden`}>
      {loading ? (
        <div className="text-center justify-center bg-white dark:bg-primary-900 items-center flex w-screen h-screen">
          <PulseLoader
            color={"#3B82F6"}
            loading={loading}
            size={20}
            margin={4}
          />
        </div>
      ) : (
        <UserProvider value={userData}>
          <SettingsProvider value={settingsContextData}>
            <Router>
              {/* <Login /> */}
              <div className="flex">
                <Navbar />
                <div className="w-full relative">
                  <PomodoroAlert timerComplete={timerComplete} />
                  <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route
                      path="/reminders"
                      render={(props) => (
                        <Reminders
                          {...props}
                          remindersData={reminderData}
                          darkMode={darkMode}
                          setReminderData={setReminderData}
                          remindersListIndex={remindersListIndex}
                          setReminderListIndex={setReminderListIndex}
                        />
                      )}
                    />
                    <Route
                      path="/notes"
                      render={(props) => (
                        <Notes
                          {...props}
                          darkMode={darkMode}
                          notesListIndex={notesListIndex}
                          setNotesListIndex={setNotesListIndex}
                        />
                      )}
                    />
                    <Route
                      path="/reading-list"
                      render={(props) => (
                        <ReadingList
                          {...props}
                          readingListData={readingListData}
                          setReadingListData={setReadingListData}
                          readingListIndex={readingListIndex}
                          setReadingListIndex={setReadingListIndex}
                        />
                      )}
                    />
                    <Route path="/extensions" component={Extras} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/settings" component={SettingsPage} />
                  </Switch>
                </div>
                <SidePanel
                  onClick={toggleThemeHandler}
                  credits={credits}
                  setCredits={setCredits}
                  setTimerComplete={setTimerComplete}
                  reminderData={reminderData}
                  setReminderData={setReminderData}
                />
              </div>
            </Router>
          </SettingsProvider>
        </UserProvider>
      )}
    </div>
  );
}

export default App;
