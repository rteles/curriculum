import React, { Component } from 'react';
import content from '../../content/education';
import '../../css/education.css';

class education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: content
        }
    }

    render() {
        return (
            <div className="education">
                <h3>
                    <span><i className="fa fa-graduation-cap fa-lg"></i></span>
                    {
                        this.state.data.filter((e) => e.key == this.props.language)
                            .map((item, i) => (
                                <span>{item.title}</span>
                            ))
                    }
                </h3>
                <div className="entryContainer content">
                    {
                        this.state.data.filter((e) => e.key == this.props.language)
                            .map(e => e.value)
                            .reduce((prev, current) => prev.concat(current), [])
                            .map((item, i) => {
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