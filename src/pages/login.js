import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onHandleInput = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onLoginMethod(){
    console.log(this.state)
  }

  render() {
    return (
      <div className="align-center">
        <h2>Welcome to Login page</h2>
        <label className="label-text">Enter Email</label>
        <input type="text" name="email" placeholder="Enter your email" onChange={this.onHandleInput}/>
        <br></br>
        <label className="label-text">Enter Password</label>
        <input type="password" name="password" placeholder="Enter your password" onChange={this.onHandleInput}/>
        <br></br>
        <button onClick={() => this.onLoginMethod()}>Login</button>
        {/* <NavLink to={{pathname: '/news'}}>Go To News Page</NavLink> */}
      </div>
    );
  }
}

export default Login;