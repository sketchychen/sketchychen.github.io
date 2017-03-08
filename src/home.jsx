import React, { Component } from 'react';
import './home.css';
import Nav from './nav.jsx';

class Home extends Component {
  scaleBanner() {
    const homeStack = document.getElementById("home-stack"),
          banner = document.getElementById("banner"),
          homeSVG = document.getElementById("home-svg");

    let bannerScale = 1,
        svgScale = 0.8;

    if(homeStack.offsetWidth < 500) {
      bannerScale = homeStack.offsetWidth/500 * 0.90;
    }

    if(homeStack.offsetHeight < homeStack.offsetWidth && homeStack.offsetHeight/500 < svgScale) {
      svgScale = homeStack.offsetHeight/500;
    }

    banner.style.transform = "scale(" + bannerScale + ", " + bannerScale + ")";
    homeSVG.style.transform = "scale(" + svgScale + ", " + svgScale + ")";
  }

  componentDidMount() {
    this.scaleBanner();
    window.addEventListener("resize", this.scaleBanner.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.scaleBanner.bind(this));
  }

  render() {
    window.addEventListener("DOMContentLoaded", this.scaleBanner.bind(this));

    return (
      <section className="section-wrapper" id="home">
        <div className="section-row">
          <div className="section-image">
            <div id="home-image"></div>
          </div>
          <div className="section-content">
            <div className="overlay-stack" id="home-stack">
              <div className="overlay-layer spin" id="burst-12">
                <svg viewBox='-250 -250 500 500' id="home-svg">
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
        <Nav />
        </div>
      </section>
    );
  }
}

export default Home;
