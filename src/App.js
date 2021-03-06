import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';

import SignUp from './components/pages/SignUp';
import Cities from './components/pages/Cities';
import Ariana from './components/pages/Ariana';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/Cities' component={Cities} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/Ariana' component={Ariana} />
      
        </Switch>
      </Router>
    </>
  );
}

export default App;