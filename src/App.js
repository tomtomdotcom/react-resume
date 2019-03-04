import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SkillList from './components/SkillList'
import Card from './components/Card';
import School from './components/School';
import Contact from './components/Contact';

class App extends Component {
  render() {
    const resume = this.props.resumeJson;
    return (
      <Router>  
        <div className="app">
          <Header resumeObj={resume} />
          
          <Route
            exact path={'/react-resume/'} 
            render={({ match }) => <Card resumeObj={resume} />}
          />
          <Route
            exact path={'/react-resume/💻'}
            render={({ match }) => <SkillList resumeObj={resume} />}
          />
          <Route
            exact path={'/react-resume/🎒'}
            render={({ match }) => <School education={resume.education[0]} />}
          />
          <Route
            exact path={'/react-resume/📧'}
            render={({ match }) => <Contact info={resume.basics} />}
          />

          <ul className="app-pages">
            <NavLink
              exact to={'.'}
              className="chips blue"
              activeStyle={{fontWeight: 'bold', boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.4)'}}
            >
              Work
            </NavLink>
            <NavLink
              to={'💻'}
              className="chips blue"
              activeStyle={{fontWeight: 'bold', boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.4)'}}
            >
              Skills
            </NavLink>
            <NavLink
              to={'🎒'}
              className="chips blue"
              activeStyle={{fontWeight: 'bold', boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.4)'}}
            >
              Education
            </NavLink>
            <NavLink
              to={'📧'}
              className="chips blue"
              activeStyle={{fontWeight: 'bold', boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.4)'}}
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </Router>
    );
  }
}

export default App;
