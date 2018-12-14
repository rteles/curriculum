import React, { Component } from 'react';
import content from '../../content/education';
import '../../css/education.css';

class education extends Component {
    constructor() {
        super();
        this.state = {
            data: content
        }
    }

    render() {
        return (
            <div className="education">
                <h3>
                    <span><i className="fa fa-graduation-cap fa-lg"></i></span>
                    <span>Education</span>
                </h3>
                <div className="entryContainer content">
                    {
                        this.state.data.map((item, i) => {
                            return (
                                <div className="entry existingEntry">
                                    <p className="title">{item.title}</p>
                                    <p className="location">{item.location} - {item.graduationInfo}</p>
                                    <div className="pointer"><i className="fa fa-circle fa-xs"></i></div>
                                    <div className="text desc">
                                        <p>{item.description}</p>
                                        <p></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default education;