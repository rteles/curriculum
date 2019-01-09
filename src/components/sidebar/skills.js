import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import content from '../../content/skills.js';
import '../../css/skills.css';

class skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: content,
      language: props.language
    }
  }

  render() {
    return (
      <div className="skills">
        <h3>
          <span><i className="fa fa-puzzle-piece fa-lg"></i></span>
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
            .map((item, i) => {
              return (
                <div className="skillsInfo" key={i}>
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