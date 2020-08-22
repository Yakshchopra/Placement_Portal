import React from 'react';
import './App.css';
import SideNav from './components/SideNav';
import SideInfo from './components/SideInfo';

function App() {
  return (
      <div className="app">
        <SideNav />
        <SideInfo />
      </div>
  );
}

export default App;
