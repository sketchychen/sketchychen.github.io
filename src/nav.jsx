import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <nav id="nav">
        <div className="navbar">
          <ul className="navbar-list list-unstyled">
            <li className="navbar-item"><button className="navbar-button">home</button></li>
            <li className="navbar-item"><button className="navbar-button">projects</button></li>
            <li className="navbar-item"><button className="navbar-button">résumé</button></li>
            <li className="navbar-item"><button className="navbar-button">about</button></li>
          </ul>
        </div>
      </nav>
    );
  }
}


export default Nav;
