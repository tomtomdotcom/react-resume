import React, { Component } from 'react';

class Job extends Component {
  render() {
    const { details, colors } = this.props;
    return (
      <div className="job-container" style={{background:colors}}>
          <div className="job-header">
            <h3>{details.company}</h3>
            <h4>{details.position}</h4>
          </div>
          
          <div className="job-date">
            {
              details.current ? 
              `Current Job as of ${details.startDate}` : 
              `${details.startDate} to ${details.endDate}`
            }
          </div>
          <br/>
          
          <div className="job-summary">
          <p className="job-paragraph">{details.summary}</p>
            <ul className="job-list">
              {
                details.highlights.map((key, index) => {
                  return <li key={index}>{details.highlights[index]}</li>
                })
              }
            </ul>
          </div>
      </div>
    );
  }
}

export default Job;
