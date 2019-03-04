import React, { Component } from 'react';
import Skills from './Skills';

class SkillList extends Component {
  render() {
    const { skills } = this.props.resumeObj;
  
    return (
      <div
        className="modal-container bg-gray"
        style={{padding: '0 40px', display: 'flex', alignItems: 'flex-start'}}
      >
        <div className="modal-content">
          <h1 className="header-name">Skill Set:</h1>
          <ul className="skills-list">
            {
              skills.keywords
                .map((key, index) => <Skills key={key} details={skills.keywords[index]}/>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default SkillList;
