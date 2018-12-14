import React, { Component } from 'react';
import content from '../../content/experience';
import '../../css/experience.css';

class experience extends Component {
    constructor() {
        super();
        this.state = {
            data: content
        }
    }

    render() {
        return (
            <div className="experience">
                <h3>
                    <span><i className="fa fa-briefcase fa-lg"></i></span>
                    <span>Latest Experiences</span>
                </h3>
                <div className="entryContainer content">
                    {
                        this.state.data.map((item, i) => {
                            return (
                                <div className="entry existingEntry">
                                    <span className="date">
                                        <span>{item.dateBegin}</span> -
                                        <br></br>
                                        <span>{item.dateEnd}</span>
                                    </span>
                                    <p className="title">{item.title}</p>
                                    <p className="company">{item.company}</p>
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

export default experience;