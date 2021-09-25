import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { userDataTemplate } from "./UserData";
import { userSettingsTemplate } from "./UserSettings";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/Dashboard";
import Reminders from "./components/reminders/Reminders";
import Notes from "./components/notes/Notes";
import ReadingList from "./components/readingList/ReadingList";
import Extras from "./components/Extras";
import SettingsPage from "./components/settings/SettingsPage";
import SidePanel from "./components/sidebar/SidePanel";
import PulseLoader from "react-spinners/PulseLoader";
import PomodoroAlert from "./components/ui/PomodoroAlert";
import {
  SettingsConsumer,
  SettingsProvider,
} from "./components/settings/SettingsContext";
import { UserProvider } from "./UserContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { reminderCategories, remindersInfo } from "./RemindersData";
import { readingListCategories, readingListInfo } from "./ReadingListData";

function App() {
  localStorage.clear();
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
    ...remindersInfo,
  ]);
  const [readingListData, setReadingListData] = useState([
    ...readingListCategories,
    ...readingListInfo,
  ]);
  const [timerComplete, setTimerComplete] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [userData, setUserData] = useState(
    localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : userDataTemplate
  );

  // useEffect(() => {
  //   localStorage.setItem("userData", JSON.stringifny(userData));
  // }, [userData]);

  const [userSettings, setUserSettings] = useState(
    localStorage.getItem("userSettings")
      ? JSON.parse(localStorage.getItem("userSettings"))
      : userSettingsTemplate
  );

  useEffect(() => {
    localStorage.setItem("userSettings", JSON.stringify(userSettings));
  }, [userSettings]);

  if (!window.Notification) {
    console.log("Browser does not support notifications.");
  } else {
    console.log("Supports desktop notifications");
  }

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
                            <Route path="/login" component={Login} />
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
