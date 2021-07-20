import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect} from "react";

import Navbar from "./components/navbar/Navbar";

// import "react-calendar/dist/Calendar.css";
import HashLoader from "react-spinners/HashLoader";

import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Reminders from "./components/Reminders";
import Notes from "./components/notes/Notes"
import Extras from "./components/Extras";
import Settings from "./components/Settings";
import SidePanel from "./components/sidebar/SidePanel";

function App() {

  const darkMode = false;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

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
          <Navbar />
          <div className="flex-auto">
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/reminders" component={Reminders} />
              <Route path="/notes" component={() => <Notes darkMode={darkMode} />}/>
              <Route path="/extensions" component={Extras} />
              <Route path="/profile" component={Profile} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </div>
          <div className="w-0 lg:w-72">
            <SidePanel />
          </div>
        </div>
      </Router>
    }
      
    </div>
  );
}

export default App;
