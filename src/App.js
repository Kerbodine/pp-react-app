import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/navbar/Navbar";

import HashLoader from "react-spinners/HashLoader";

import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Reminders from "./components/reminders/Reminders";
import Notes from "./components/notes/Notes";
import Extras from "./components/Extras";
import Settings from "./components/Settings";
import SidePanel from "./components/sidebar/SidePanel";

import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

import firebase from "firebase";

function App() {
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(false);

  let darkModeValue = false;

  if (localStorage.getItem("darkMode") !== null) {
    darkModeValue = JSON.parse(localStorage.getItem("darkMode"));
  }

  const [darkMode, setDarkMode] = useState(darkModeValue);

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
        <AuthProvider>
          <Router>
            <div className="flex">
              <Navbar darkMode={darkMode} />
              <div className="flex-auto">
                <Switch>
                  <PrivateRoute path="/" exact component={Dashboard} />
                  <PrivateRoute
                    path="/reminders"
                    render={(props) => (
                      <Reminders {...props} darkMode={darkMode} />
                    )}
                  />
                  <PrivateRoute
                    path="/notes"
                    render={(props) => <Notes {...props} darkMode={darkMode} />}
                  />
                  <Route path="/extensions" component={Extras} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/settings" component={Settings} />
                </Switch>
              </div>
              <div className="w-0 lg:w-72">
                <SidePanel darkMode={darkMode} onClick={toggleThemeHandler} />
              </div>
            </div>
          </Router>
        </AuthProvider>
      )}
    </div>
  );
}

export default App;
