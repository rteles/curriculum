import React, { Component } from 'react';
import content from '../../content/title';
import '../../css/title.css';

class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: content
    }
  }

  render() {
    return (
      <div className="title">
        {
          this.state.data.filter((e) => e.key == this.props.language)
            .map(e => e.value)
            .reduce((prev, current) => prev.concat(current), [])
            .map((item, i) => {
              return (
                <div className="titleEntry">
                  <div class="titleIcon">
                    <span><i className="fa fa-globe"></i></span>
                  </div>
                  <div class="titleContainer">
                    <h1>
                      {item.name}
                    </h1>
                    <h2>{item.title}</h2>
                  </div>
                </div>
              )
            })
        }
      </div>
    );
  }
}

export default contact;