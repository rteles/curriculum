import React, { Component } from 'react';
// import content from '../../content/summary.js';
import '../../css/summary.css';

class summary extends Component {
    render() {
        return (
            <div className="summary">
                <h3>
                    <span><i className="fa fa-bullseye fa-lg"></i></span>
                    <span>Summary</span>
                </h3>
                <div className="entryContainer content">
                    <div className="entry existingEntry">
                        <div className="pointer"><i className="fa fa-circle fa-xs"></i></div>
                        <div className="text desc">
                            <p>I am a full stack developer with 10 years of experience, that being 10 with javascript and 8 with C#. I have knowledge in some front end and back end languages, responsive frameworks and best code practices. I am dedicated to perfecting my craft by learning from more seasoned developers, and continuously making strides to learn all that I can about development.</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default summary;