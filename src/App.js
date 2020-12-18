import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import Login from './pages/login';
import NewsList from './pages/news-list';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/news" component={NewsList}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;