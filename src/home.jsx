import React, { Component } from 'react';
import './home.css';
import './nav.css';

class Home extends Component {
  render() {
    return (
      <section className="section-wrapper" id="home">
        <div className="section-row">
          <div className="section-image">
            <div id="home-image"></div>
          </div>
          <div className="section-content">
            <div className="overlay-stack">
              <div className="overlay-layer spin" id="burst-12">
                <svg viewBox='-250 -250 500 500'>
              		<polygon points='250,0 48.3,12.9
              										 216.5,125 35.4,35.4
              										 125,216.5 12.9,48.3
              										 0,250 -12.9,48.3
              										 -125,216.5 -35.4,35.4
              										 -216.5,125 -48.3,12.9
              										 -250,0 -48.3,-12.9
              										 -216.5,-125 -35.4,-35.4
              										 -125,-216.5 -12.9,-48.3
              										 0,-250 12.9,-48.3
              										 125,-216.5 35.4,-35.4
              										 216.5,-125 48.3,-12.9' />
              	</svg>
              </div>
              <div className="overlay-layer" id="banner">
                <div className="home-banner floating-home-banner">
                  <div id="banner-text-top" className="banner-text">
                    <h1>RACHEL S. CHEN</h1>
                  </div>
                  <div id="banner-text-bottom" className="banner-text">
                    <h1>WEB DEVELOPER!</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav id="nav">
            <div className="navbar">
              <ul className="navbar-list list-unstyled">
                <li className="navbar-item"><button className="navbar-button">home</button></li>
                <li className="navbar-item"><button className="navbar-button">résumé</button></li>
                <li className="navbar-item"><button className="navbar-button">projects</button></li>
                <li className="navbar-item"><button className="navbar-button">about</button></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

export default Home;
