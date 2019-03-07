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
          <p className="hero-text"><a href={basics.pdf}>PDF version</a> of the resume.</p>
          :
          ''
        }
        
        <div className="hero-link-container">
          <a
            href="https://github.com/iamskok/react-resume"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
          >
            made with 
            <img src={logo} className="hero-logo" alt="Made With React Logo"/>
          </a>
        </div>
        <span
          role="img"
          aria-label="Arrow down"
          className="hero-arrow"
        >
          ⬇️
        </span>
      </div>
    );
  }
}

export default Hero;
