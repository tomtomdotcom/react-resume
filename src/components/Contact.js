import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Contact = (props) => {
  const { email, website } = props.info;
  const layout = {display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}
  return (
      <div className="modal-container bg-gray" style={{display: 'flex'}}>
        <div className="modal-content">
          <CSSTransitionGroup 
            style={layout}
            component="div"
            transitionName="slide"
            transitionEnterTimeout={5000}
            transitionLeaveTimeout={3000}
          >
            <h1 className="header-name" >Contact:</h1>
            <a
              href="mailto:skok@vova.io?subject=Resume%20Inquiry"
              style={{color: '#4a4a4a',textDecoration: 'none'}}
            >
              {email}
            </a>
            <a
              href="https://linkedin.com/in/iamskok"
              style={{color: '#4a4a4a',textDecoration: 'none'}}
              target="_blank"
              rel="noopener noreferrer"
            >
              {website}
            </a>
          </CSSTransitionGroup>
        </div>
      </div>
    )
}
    
export default Contact;
