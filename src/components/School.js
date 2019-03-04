import React from 'react';

const School = (props) => {
  const { area, endDate, institution, studyType } = props.education;
  return (
    <div className="modal-container bg-gray" style={{display: 'flex'}}>
      <div className="modal-content">
        <div style={
          {
            color: '#4a4a4a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'}
          }
        >
        <h1 className="header-name">School:</h1>
          <h3>{institution}</h3>
          <h4>{studyType} in {area}</h4>
          <h4>Graduated {endDate}</h4>
        </div>
      </div>
    </div>
  );
}
    
export default School;
