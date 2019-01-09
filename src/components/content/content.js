import React, { Component } from 'react';
import Title from './title';
import Summary from './summary';
import Experience from './experience';
import Education from './education';
import '../../css/content.css';

class content extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="content">
        <Title language={this.props.language} />
        <Summary language={this.props.language} />
        <Experience language={this.props.language} />
        <Education language={this.props.language} />
      </div>
    );
  }
}

export default content;