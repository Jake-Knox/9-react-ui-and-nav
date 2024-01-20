import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
// <Switch> component has been deprecated and replaced with the <Routes> component.
// <Route exact path="/" component={Home} /> 
// https://www.w3schools.com/react/react_router.asp

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Sports from './components/Sports';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="App"> {/* Apply the styles to the entire App component */}
        <Navbar />

        <hr />

        <Routes>

          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/about" Component={About}></Route>
          <Route exact path="/dashboard" Component={Dashboard}></Route>
          <Route exact path="/register" Component={Register}></Route>
          <Route exact path="/sports" Component={Sports}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
