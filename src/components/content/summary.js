import React, { Component } from 'react';
import content from '../../content/summary.js';
import '../../css/summary.css';

class summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: content
        }
    }

    render() {
        return (
            <div className="summary">
                <h3>
                    <span><i className="fa fa-bullseye fa-lg"></i></span>
                    {
                        this.state.data.filter((e) => e.key == this.props.language)
                            .map((item, i) => (
                                <span>{item.title}</span>
                            ))
                    }
                </h3>
                <div className="entryContainer content">
                    <div className="entry existingEntry">
                        <div className="pointer"><i className="fa fa-circle fa-xs"></i></div>
                        <div className="text desc">
                            {
                                this.state.data.filter((e) => e.key == this.props.language)
                                    .map(e => e.value)
                                    .reduce((prev, current) => prev.concat(current), [])
                                    .map(function (item, i) {
                                        return (
                                            <p>{item.description}</p>
                                        )
                                    })
                            }
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default summary;