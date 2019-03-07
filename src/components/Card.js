import React, { Component } from 'react';
import Jobs from './Job';

class Card extends Component {
  render() {
    const { work } = this.props.resumeObj;
    const bgColors = ['#4bdb8b', '#db7093', '#009ee2', '#ffab91'];
   
    return (
      <div className="card-container">
        <div className="card-content">
         {
            work.map((key, index) => {
              return (
                <Jobs 
                  key={index} 
                  details={work[index]}
                  colors={bgColors[index]}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Card;
