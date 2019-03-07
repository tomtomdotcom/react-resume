import React from 'react';

const Education = (props) => {
  const { area, endDate, institution, studyType } = props.education;
  return (
    <div className="education-container" style={{display: 'flex'}}>
      <div className="education-modal">
        <div style={
          {
            color: '#4a4a4a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'}
          }
        >
        <h1 className="education-header">Education</h1>
          <div className="education-text">
            <h4 className="education-subheader">{institution}</h4>
            <h5>{studyType} in {area}</h5>
            <h5>Graduated {endDate}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
    
export default Education;
