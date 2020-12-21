import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false
    }
  }

  onHandleInput = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onLoginMethod(){
    this.setState({
      error : false
    });
    const url = "https://reqres.in/api/login";
    axios.post(url, this.state)
          .then((response) => {
            console.log(response)
            this.props.history.push('/home')
          })
          .catch((error) => {
            console.log(error)
            this.setState({
              error : true
            });
          })
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
        {this.state.error && <h3 className="error-msg">Invalid Username or Passsord</h3>}
        {/* <NavLink to={{pathname: '/news'}}>Go To News Page</NavLink> */}
      </div>
    );
  }
}

export default Login;