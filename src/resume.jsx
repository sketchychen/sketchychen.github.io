import React, { Component } from 'react';
import './resume.css';

class Resume extends Component {
  render() {
    return (
      <section className="section-wrapper" id="résumé">
        <div className="section-row">
          <div className="section-image">

          </div>
          <div className="section-content">

          </div>
          <p>I'm in the middle of prettifying this section.</p>
          <p>In the mean time, here's both an embedded version of my resume and a link to the PDF itself:</p>
          <p>
            <a target="_blank" href="https://resume.creddle.io/embed/a5pujxmnmpa">
              <i className="fa fa-file-text" aria-hidden="true"></i> Résumé
            </a>
          </p>
          <iframe src="https://resume.creddle.io/embed/a5pujxmnmpa" width="850" height="275" seamless></iframe>
        </div>
      </section>
    );
  }
}

export default Resume;
