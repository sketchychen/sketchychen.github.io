import React, { Component } from 'react';
import './about.css';

class About extends Component {
  render() {
    return (
      <section className="section-wrapper" id="about">
        <div className="section-row">
          <div className="section-content">
            <h2>RACHEL IS A FAN OF WHIMSY AND TECHNICAL CHALLENGES</h2>
            <p>Rachel's love of video games and robotics motivates her foray into coding,
              and her engineering background has trained her problem-solving skills, attention to detail, and aversion to error.</p>
            <p>After getting her Bachelor's degree in mechanical engineering and
              working as a structural engineer for a while, Rachel figured it was
              high time she moved on to master the coding world as the next step
              in bringing about the robot apocalypse in her image.</p>
            <p>Good luck to humanity, y'all!</p>
          </div>
          <div className="section-image">
            <div id="about-image"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
