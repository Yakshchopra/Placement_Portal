import React from 'react';
import './App.css';
import SideNav from './components/SideNav';
import SideInfo from './components/SideInfo';
import StudentLogin from './components/StudentLogin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <switch>   
          <Route path="/" exact component={StudentLogin} />       
          <Route path="/student-dashboard" component={SideNav} />
        </switch>
        
      </div>
    </Router>
  );
}

export default App;
