import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import SkillsList from './components/SkillsList'
import Card from './components/Card';
import Education from './components/Education';
import Contact from './components/Contact';

class App extends Component {
  render() {
    const resume = this.props.resumeJson;
    return (
      <Router>  
        <div className="app">
          <Hero resumeObj={resume} />
          
          <Route
            exact path={'/react-resume/'} 
            render={({ match }) => <Card resumeObj={resume} />}
          />
          <Route
            exact path={'/react-resume/💻'}
            render={({ match }) => <SkillsList resumeObj={resume} />}
          />
          <Route
            exact path={'/react-resume/🎒'}
            render={({ match }) => <Education education={resume.education[0]} />}
          />
          <Route
            exact path={'/react-resume/📧'}
            render={({ match }) => <Contact info={resume.basics} />}
          />

          <ul className="nav-container">
            <nav className="nav">
              <NavLink
                exact to={'.'}
                className="nav-btn"
                activeStyle={{fontWeight: 'bold', boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.4)'}}
              >
                Experience
              </NavLink>
              <NavLink
                to={'💻'}
                className="nav-btn"
                activeStyle={{fontWeight: 'bold', boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.4)'}}
              >
                Skills
              </NavLink>
              <NavLink
                to={'🎒'}
                className="nav-btn"
                activeStyle={{fontWeight: 'bold', boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.4)'}}
              >
                Education
              </NavLink>
              <NavLink
                to={'📧'}
                className="nav-btn"
                activeStyle={{fontWeight: 'bold', boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.4)'}}
              >
                Contact
              </NavLink>
            </nav>
          </ul>
        </div>
      </Router>
    );
  }
}

export default App;
