import React, { Component } from 'react';
import './css/App.css';
import Title from './components/title';
import Sidebar from './components/sidebar/sidebar';
import Summary from './components/summary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Page">
          <header className="App-header">
            <Title />
            <Sidebar />
            {/* <Summary /> */}
          </header>
        </div>
      </div>
    );
  }
}

export default App;
