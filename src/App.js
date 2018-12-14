import React, { Component } from 'react';
import './css/App.css';
import Content from './components/content/content';
import Sidebar from './components/sidebar/sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Page">
          <header className="App-header">
            <Content />
            <Sidebar />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
