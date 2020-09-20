import React from 'react';
import { connect } from 'react-redux';
import { logInUser } from '../redux/user'

export class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.logInUser(user)
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.onSubmit}>
          <label>email:</label>
          <input type="text" name="email" onChange={this.onChange} value={this.state.email}></input>
          <label>password:</label>
          <input type="text" name="password" onChange={this.onChange} value={this.state.password}></input>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {logInUser})(Login)
