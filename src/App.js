import React, { Component } from 'react';
import './css/App.css';
import Content from './components/content/content';
import Sidebar from './components/sidebar/sidebar';
import Export from './components/export';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { language: 'BR' };
  }

  componentDidMount() {
    document.title = "Sthefanny Gonzaga";
  }

  setLanguage(language) {
    this.setState({
      language: language
    });
  }

  render() {
    return (
      <div className="App">
        <Export>
        </Export>
        <div id="overallPage" className="Page">
          <header className="App-header">
            <Content language={this.state.language} />
            <Sidebar language={this.state.language} />
          </header>
        </div>
        <div className="languageButtons">
          <button onClick={() => this.setLanguage('BR')}>PT-BR</button>
          <button onClick={() => this.setLanguage('EN')}>ENG</button>
        </div>
      </div>
    );
  }
}

export default App;
