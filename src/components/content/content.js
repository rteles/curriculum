import React, { Component } from 'react';
import Title from './title';
import Summary from './summary';
import Experience from './experience';
import Education from './education';
import '../../css/content.css';

class content extends Component {
  render() {

    return (
      <div className="content">
        <Title />
        <Summary />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default content;