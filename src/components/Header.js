import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    const { basics } = this.props.resumeObj;
  
    return (
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-name">{basics.name}</h1>
          <h4 className="header-label">
            {basics.location.city} <span role="img" aria-label="Sun">☀️</span>
          </h4>

          <p><a href="resume.pdf">PDF version</a> of the resume.</p>
          
          <div className="made-with-react">
            <a
              href="https://github.com/iamskok/react-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              made with 
              <img src={logo} className="app-logo" alt="Made With React Logo"/>
            </a>
          </div>
          <a
            className="only-iphone-se"
            href="mailto:skok@vova.io?subject=Resume%20Inquiry"
            style={{color: '#4a4a4a',textDecoration: 'none'}}
          >
            Contact me
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
