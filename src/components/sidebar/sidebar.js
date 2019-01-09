import React, { Component } from 'react';
import Contacts from './contact.js';
import Skills from './skills.js';
import Languages from './languages.js';
import '../../css/sidebar.css';

class sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="sidebar">
        <Contacts language={this.props.language} />
        <Skills language={this.props.language} />
        <Languages language={this.props.language} />
      </div>
    );
  }
}

export default sidebar;