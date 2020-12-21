import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      userList : []
    }
  }

  componentDidMount(){
    const url = "https://reqres.in/api/users?page=2";
    axios.get(url)
        .then((response) => {
          this.setState({
            userList : response.data.data
          })
        })
        .catch((error) => {
          console.log(error)
        })
  }

  render() {
    let userList = this.state.userList.map((value, index) => {
      return(
          <tr key={index}>
            <td>{value.first_name}</td>
            <td>{value.last_name}</td>
            <td>{value.email}</td>
            <td><img src={value.avatar} /></td>
          </tr>
      )
    })

    return (
      <div>
        <h2>Welcome to Home Page</h2>
        <NavLink to={{pathname: "/"}}>Logout</NavLink>
        <table id="customers">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
          {userList}

          </tbody>
        </table>
      </div>
    );
  }
}

export default HomePage;