import React, { Component } from 'react';
import Contacts from './contact.js';
import Skills from './skills.js';
import Languages from './languages.js';
import '../../css/sidebar.css';

class sidebar extends Component {
  render() {

    return (
      <div className="sidebar">
        <Contacts />
        <Skills />
        <Languages />
      </div>
    );
  }
}

export default sidebar;