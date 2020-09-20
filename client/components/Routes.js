import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './Login'

const Routes = () => {
  return (
    <div>
      <Router path="/users/login">
        <Login />
      </Router>
    </div>
  )
}

export default Routes
