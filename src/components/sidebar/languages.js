import React, { Component } from 'react';
import content from '../../content/languages.js';
import StarRatingComponent from 'react-star-rating-component';
import '../../css/languages.css';

class skills extends Component {
  constructor() {
    super();
    this.state = {
      data: content
    }
  }

  render() {
    return (
      <div className="languages">
        <h3>
          <span><i className="fa fa-flag fa-lg"></i></span>
          <span>Languages</span>
        </h3>
        {
          this.state.data.map((item, i) => {
            return (
              <div className="languagesInfo" key={i}>
                <h4>{item.name}</h4>
                <div className="rating">
                  <StarRatingComponent
                    name="rating"
                    editing={false}
                    renderStarIcon={() => {
                      return (
                        <span className="rating">
                          <i className='fa fa-circle' />
                        </span>
                      );
                    }}
                    starColor="#343434"
                    emptyStarColor="#d5d6d6"
                    starCount={5}
                    value={item.level}
                  />
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