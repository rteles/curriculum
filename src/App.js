import React, { Component } from 'react';
import './css/App.css';
import Content from './components/content/content';
import Sidebar from './components/sidebar/sidebar';
import Export from './components/export';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Export>
          <div id="overallPage" className="Page">
            <header className="App-header">
              <Content />
              <Sidebar />
            </header>
          </div>
        </Export>
      </div>
    );
  }
}

export default App;
