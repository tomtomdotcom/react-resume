import React, { Component } from 'react';

class Skill extends Component {
  render() {
    return (
      <li className="chips blue">
        {this.props.details}
      </li>
    );
  }
}

export default Skill;
