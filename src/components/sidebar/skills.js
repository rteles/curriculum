import React, { Component } from 'react';
import content from '../../content/skills.js';
import '../../css/skills.css';
import '../../css/ratings.css';

class skills extends Component {
  constructor() {
    super();
    this.state = {
      data: content
    }
  }

  renderRatings(level){
    let maxLevel = 5;
    const ratingList = [];

    for(let i = 0; i < level; i++)
    {
      ratingList.push((<div className='isSet'></div>));
    }

    while(ratingList.length < maxLevel){
      ratingList.push((<div></div>));
    }

    return ratingList;
  }

  render() {
    return (
      <div className="skills">
        <h3>Skills</h3>
        {
          this.state.data.map((item, i) => {
            return (
              <div className="skillsInfo" key={i}>
                <h4>{item.name}</h4>
                <div className="rating">
                  {this.renderRatings(item.level)}
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default skills;