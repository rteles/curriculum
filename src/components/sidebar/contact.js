import React, { Component } from 'react';
import content from '../../content/contact.js';
import '../../css/contact.css';

class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: content
    }
  }
  render() {
    return (
      <div className="contact">
        <h3>
          <span><i className="fa fa-user fa-lg"></i></span>
          {
            this.state.data.filter((e) => e.key == this.props.language)
              .map((item, i) => (
                <span>{item.title}</span>
              ))
          }
        </h3>
        {
          this.state.data.filter((e) => e.key == this.props.language)
            .map(e => e.value)
            .reduce((prev, current) => prev.concat(current), [])
            .map(function (item, i) {
              return (
                <div className="contactInfo" key={i}>
                  <h4>{item.name}</h4>
                  <p>{item.value}</p>
                </div>
              )
            })
        }
      </div>
    );
  }
}

export default contact;