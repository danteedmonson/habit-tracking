import "./App.css";
import React from 'react';
//import "@fontsource/roboto";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import StatsPage from "./pages/StatsPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Router>
          <Switch>
            <Route path ="/" exact>
              <LoginPage />
            </Route>
            <Route path ="/Register" exact>
              <RegisterPage />
            </Route>
            <Route path ="/Dashboard" exact>
              <Dashboard />
            </Route>
            <Route path ="/Stats" exact>
              <StatsPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
