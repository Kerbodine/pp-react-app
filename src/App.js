import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/navbar/Navbar";

import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import CalendarApp from "./components/CalendarApp";
import Reminders from "./components/Reminders";
import Notes from "./components/Notes";
import Extras from "./components/Extras";
import Settings from "./components/Settings";
import SidePanel from "./components/sidebar/SidePanel";

function App() {
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
    <Router>
      <div className="App">
        <Navbar
          toggleNavbarHandler={toggleNavbarHandler}
          isExpanded={isExpanded}
        />
        <SidePanel
          isSideExpanded={isSideExpanded}
          toggleSidePanelHandler={toggleSidePanelHandler}
        />
        <Switch>
          <div className={`transition-all ${isExpanded ? "ml-48" : "ml-14"}`}>
            <Route path="/" exact component={Dashboard} />
            <Route path="/calendar" component={CalendarApp} />
            <Route path="/reminders" component={Reminders} />
            <Route path="/notes" render={(props) => <Notes {...props} isSideExpanded={isSideExpanded} />} />
            <Route path="/extras" component={Extras} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
