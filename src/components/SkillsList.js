import React, { Component } from 'react';
import Skill from './Skill';

class SkillsList extends Component {
  render() {
    const { skills } = this.props.resumeObj;
  
    return (
      <div
        className="modal-container"
        style={{display: 'flex'}}
      >
        <div className="modal-content">
          <h1 className="header-name">Skill Set</h1>
          <ul className="skills-list">
            {
              skills.keywords
                .map((key, index) => <Skill key={key} details={skills.keywords[index]}/>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default SkillsList;
