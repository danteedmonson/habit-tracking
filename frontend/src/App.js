import "./App.css";
import React, {createContext} from 'react';
//import "@fontsource/roboto";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import StatsPage from "./pages/StatsPage";
import HabitsPage from "./pages/HabitsPage";
import CalendarPage from "./pages/CalendarPage";
import { BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const DevContext = createContext("http://localhost:8000/api")

function App() {
  return (
    <DevContext.Provider value="http://localhost:8000/api">
    <div className="App">
      <div className="App-container">
        <Router>
          <Routes>
            <Route path ="/"  exact element={<LoginPage />}/>
            <Route path ="/Register"  exact element={<RegisterPage />}/>
            <Route path ="/Dashboard"  exact element={<Dashboard />}/>
            <Route path ="/Stats"  exact element={<StatsPage />}/>
            <Route path ="/Habits"  exact element={<HabitsPage />}/>
            <Route path ="/Calendar"  exact element={<CalendarPage />}/>
          </Routes>
        </Router>
      </div>
    </div>
    </DevContext.Provider>
  );
}

export default App;
