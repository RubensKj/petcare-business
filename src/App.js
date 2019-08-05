import React from 'react';
import Routes from './routes';

import SideBar from './Components/SideBar';

import './styles.css';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes />
    </div>
  );
}

export default App;
