import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
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
import settingsContext, {
  SettingsConsumer,
  SettingsProvider,
} from "./components/settings/SettingsContext";
import { UserProvider } from "./UserContext";
import Login from "./components/Login";
import Signup from "./components/Signup";

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

  // User data context value
  const userDataTemplate = {
    username: "Username",
    profileColor: "red",
    allColors: [
      "red",
      "orange",
      "amber",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
    ],
  };

  const [userData, setUserData] = useState(
    localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : userDataTemplate
  );

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const userSettingsTemplate = {
    darkMode: false,
    sidebarCollapsed: false,
    sidebarGreeting: true,
    sidebarCalendar: true,
    sidebarPomodoro: true,
    sidebarTasks: true,
    sidebarNotes: true,
    notificationTasks: true,
    notificationPomodoro: true,
    notificationEvent: true,
    remindersToday: true,
    remindersImportant: true,
    remindersStarred: true,
    remindersPinned: true,
    remindersAll: true,
    readingProgress: true,
    readingComplete: true,
    readingType: true,
    readingFavorite: true,
    readingAll: true,
  };

  const [userSettings, setUserSettings] = useState(
    localStorage.getItem("userSettings")
      ? JSON.parse(localStorage.getItem("userSettings"))
      : userSettingsTemplate
  );

  useEffect(() => {
    localStorage.setItem("userSettings", JSON.stringify(userSettings));
  }, [userSettings]);

  return (
    <div className="App">
      <UserProvider value={{ userData: userData, setData: setUserData }}>
        <SettingsProvider
          value={{
            data: userSettings,
            setData: setUserSettings,
          }}
        >
          <SettingsConsumer>
            {(settings) => {
              return (
                <div className={`${settings.data.darkMode ? "dark" : ""}`}>
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
                    <Router>
                      {/* <Login /> */}
                      {/* <Signup /> */}
                      <div className="flex">
                        <Navbar />
                        <div
                          className={`w-full relative bg-white dark:bg-primary-900 pr-4 lg:pr-0 ${
                            settings.data.sidebarCollapsed ? "!pr-4" : ""
                          }`}
                        >
                          <PomodoroAlert timerComplete={timerComplete} />
                          <Switch>
                            <Route path="/" exact component={Dashboard} />
                            <Route
                              path="/reminders"
                              exact
                              render={(props) => (
                                <Reminders
                                  {...props}
                                  remindersData={reminderData}
                                  darkMode={settings.data.darkMode}
                                  setReminderData={setReminderData}
                                  remindersListIndex={remindersListIndex}
                                  setReminderListIndex={setReminderListIndex}
                                />
                              )}
                            />
                            <Route
                              path="/notes"
                              exact
                              render={(props) => (
                                <Notes
                                  {...props}
                                  darkMode={settings.data.darkMode}
                                  notesListIndex={notesListIndex}
                                  setNotesListIndex={setNotesListIndex}
                                />
                              )}
                            />
                            <Route
                              path="/reading-list"
                              exact
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
                          credits={credits}
                          setCredits={setCredits}
                          setTimerComplete={setTimerComplete}
                          reminderData={reminderData}
                          setReminderData={setReminderData}
                        />
                      </div>
                    </Router>
                  )}
                </div>
              );
            }}
          </SettingsConsumer>
        </SettingsProvider>
      </UserProvider>
    </div>
  );
}

export default App;
