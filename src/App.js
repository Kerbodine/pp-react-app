import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect} from "react";
import firebase from "./firebase";

import HashLoader from "react-spinners/HashLoader";

import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Reminders from "./components/reminders/Reminders"
import Notes from "./components/notes/Notes"
import Extras from "./components/Extras";
import Settings from "./components/Settings";
import SidePanel from "./components/sidebar/SidePanel";

function App() {

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
  }

  useEffect(() => {
    getReminders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1000)
  // }, [])

  let darkModeValue = false

  if (localStorage.getItem("darkMode") !== null) {
    darkModeValue = JSON.parse(localStorage.getItem("darkMode"));
    console.log(darkModeValue);
  }

  const [darkMode, setDarkMode] = useState(darkModeValue);


  const toggleThemeHandler =  () => {
    localStorage.setItem("darkMode", !darkMode)
    setDarkMode(!darkMode)
  };

  return (
    <div className="App overflow-hidden">
    {
      loading ?

      <div className="text-center justify-center items-center flex w-screen h-screen">
        <HashLoader color={"#3B82F6"} loading={loading} size={75} />
      </div>
      : 
      <Router>
        <div className="flex">
          <Navbar darkMode={darkMode} />
          <div className="flex-auto">
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/reminders" render={(props) => (<Reminders {...props} darkMode={darkMode} reminders={reminders} />)} />
              <Route path="/notes" component={Notes}/>
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
    }
      
    </div>
  );
}

export default App;
