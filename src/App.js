import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect} from "react";

import Navbar from "./components/navbar/Navbar";

// import "react-calendar/dist/Calendar.css";
import HashLoader from "react-spinners/HashLoader";

import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Reminders from "./components/Reminders";
import Notes from "./components/Notes";
import Extras from "./components/Extras";
import Settings from "./components/Settings";
import SidePanel from "./components/sidebar/SidePanel";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const sidebarCollapsed = localStorage.getItem("sidebar-collapsed");
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

  const toggleNavbarHandler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem("sidebar-collapsed", true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem("sidebar-collapsed");
  };

  const sidePanelCollapsed = localStorage.getItem("side-panel-collapsed");
  const [isSideExpanded, setIsSideExpanded] = useState(
    sidePanelCollapsed ? false : true
  );

  const toggleSidePanelHandler = () => {
    if (isSideExpanded) {
      setIsSideExpanded(false);
      localStorage.setItem("side-panel-collapsed", true);
      return;
    }
    setIsSideExpanded(true);
    localStorage.removeItem("side-panel-collapsed");
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
        <Navbar
          toggleNavbarHandler={toggleNavbarHandler}
          isExpanded={isExpanded}
        />
        <SidePanel
          isSideExpanded={isSideExpanded}
          toggleSidePanelHandler={toggleSidePanelHandler}
        />
        <div className={`transition-all ${isExpanded ? "ml-48" : "ml-14"}`}>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/reminders" component={Reminders} />
            <Route path="/notes" render={(props) => <Notes {...props} isSideExpanded={isSideExpanded} />} />
            <Route path="/extras" component={Extras} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </div>
      </Router>
    }
      
    </div>
  );
}

export default App;
