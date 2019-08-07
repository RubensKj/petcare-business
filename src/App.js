import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import Store from './Store';

import SideBar from './Components/SideBar';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <SideBar />
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
