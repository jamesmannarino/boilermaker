import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './Login'
import Navbar from './Navbar'

const Routes = () => {
  return (
    <div>
      <Router path="/users/login">
        <Login />
        <Navbar />
      </Router>
    </div>
  )
}

export default Routes
