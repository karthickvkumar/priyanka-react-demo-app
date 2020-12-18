import React, { Component } from 'react';
import './App.css';

import NewsList from './pages/news-list';

class App extends Component {
  render() {
    return (
      <div>
        <NewsList></NewsList>
      </div>
    );
  }
}

export default App;