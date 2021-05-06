import React from 'react';
import './App.css';
import Landing from './Landing';
import Main from './Main';
import Login from './Login';
import {Router} from 'react-router-dom';


import history from './history';
import Routes from './Routes';
import Logout from './Logout';

function App() {

  return (
    <div className="App">
      {/* <Landing/> */}
      {/* <Login/> */}
      {/* <Main/> */}
      {/* <Router history={history}>
        <Routes/>
      </Router> */}
      <Routes/>
      {/* <Logout/> */}
    </div>
  );
}

export default App;
