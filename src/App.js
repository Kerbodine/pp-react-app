import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import firebase from "./firebase";

import Login from "./Login";

import HashLoader from "react-spinners/HashLoader";

import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Reminders from "./components/reminders/Reminders";
import Notes from "./components/notes/Notes";
import Extras from "./components/Extras";
import Settings from "./components/Settings";
import SidePanel from "./components/sidebar/SidePanel";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const loginHandler = () => {
    clearErrors();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const signupHandler = () => {
    clearErrors();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const logoutHandler = () => {
    firebase.auth().signOut();
  };

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("reminders");

  const getReminders = () => {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setReminders(items);
      setLoading(false);
    });
  };

  useEffect(() => {
    getReminders();
  }, []);

  let darkModeValue = false;

  if (localStorage.getItem("darkMode") !== null) {
    darkModeValue = JSON.parse(localStorage.getItem("darkMode"));
    console.log(darkModeValue);
  }

  const [darkMode, setDarkMode] = useState(darkModeValue);

  const toggleThemeHandler = () => {
    localStorage.setItem("darkMode", !darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <div className="App h-screen overflow-hidden">
      {loading ? (
        <div className="text-center justify-center items-center flex w-screen h-screen">
          <HashLoader color={"#3B82F6"} loading={loading} size={75} />
        </div>
      ) : (
        <>
          { user ? (
            <Router>
              <div className="flex">
                <Navbar darkMode={darkMode} logoutHandler={logoutHandler} />
                <div className="flex-auto">
                  <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route
                      path="/reminders"
                      render={(props) => (
                        <Reminders
                          {...props}
                          darkMode={darkMode}
                          reminders={reminders}
                        />
                      )}
                    />
                    <Route path="/notes" component={Notes} />
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
          ) : (
            <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loginHandler={loginHandler}
            signupHandler={signupHandler}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
          )};
        </>
      )}
    </div>
  );
}

export default App;
