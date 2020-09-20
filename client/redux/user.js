import axios from 'axios';

const LOGGED_IN_USER = 'LOGGED_IN_USER'
const LOGGED_OUT_USER = 'LOGGED_OUT_USER'

export const loggedInUser = user => {
  return {
    type: LOGGED_IN_USER,
    user
  }
};

export const loggedOutUser = () => {
  return {
    type: LOGGED_OUT_USER
  }
};

export const logInUser = (user) => {
  console.log(user)
  return async(dispatch) => {
    try{
      await axios.put('/api/users/login', user)
      dispatch(loggedInUser(user))
    } catch (err) {
      console.error(err)
    }
  }
};

export const logOutUser = () => {
  return async(dispatch) => {
    try{
      await axios.post('/api/users/logout')
      dispatch(loggedOutUser())
    } catch (err) {
      console.error(err)
    }
  }
};

const initialState = {
  isLoggedIn: false,
  email: '',
  password: '',
};

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case LOGGED_IN_USER:
      console.log('login action from reducer: ', action)
      return {...state, email: action.user.email, password: action.user.password, isLoggedIn: true}
    case LOGGED_OUT_USER:
      console.log('logout action from reducer: ', action)
      return {...state, isLoggedIn: false}
    default:
      return state
  }
}
