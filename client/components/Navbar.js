import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import { logOutUser } from '../redux/user'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h3>Boilermaker</h3>
    <nav>
      {isLoggedIn ? (
        <div>
          <Link to="/">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
  </div>
)

const mapState = (state) => {
  console.log(state)
  return {
    isLoggedIn: !!state.isLoggedIn
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logOutUser())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
