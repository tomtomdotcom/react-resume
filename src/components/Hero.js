import React, { Component } from 'react';
import logo from '../logo.svg';

class Hero extends Component {
  render() {
    const { basics } = this.props.resumeObj;
  
    return (
      <div className="hero">
        <h1 className="hero-header">{basics.name}</h1>
        <h4 className="hero-subheader">
          {basics.location.city} <span role="img" aria-label="Sun">☀️</span>
        </h4>

        <p>{basics.summary}</p>
        {
          basics.pdf
          ?
          <p style={{fontWeight: '900'}}><a href={basics.pdf}>PDF version</a> of the resume.</p>
          :
          ''
        }
        
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
        <span
          role="img"
          aria-label="Arrow down"
          style={{
            bottom: '20px',
            fontSize: '50px',
            position: 'absolute',
            left: 'calc(50% - 25px)'
          }}
        >
          ⬇️
        </span>
      </div>
    );
  }
}

export default Hero;
