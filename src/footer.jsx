import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="icons">
          <p>more of rachel:</p>
          <ul className="social-list list-unstyled list-inline">
            <li className="social-icon">
              <a target="_blank" href="https://resume.creddle.io/embed/a5pujxmnmpa">
                <i className="fa fa-file-text" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-icon">
              <a target="_blank" href="mailto:rachel.s.chen@outlook.com">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-icon">
              <a target="_blank" href="https://www.linkedin.com/in/rachel-chen-76542619">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-icon">
              <a target="_blank" href="https://github.com/skylocke/">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-icon">
              <a target="_blank" href="http://skylocke.tumblr.com/">
                <i className="fa fa-tumblr" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-icon">
              <a target="_blank" href="http://instagram.com/sanitynevermore/">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="about-site">
          <p>rschen.co is built with <a target="_blank" href="https://facebook.github.io/react/">React.js</a> with a bit of jQuery, sprinkled with a dash of decorative silliness made in MS Paint and Adobe Photoshop.</p>
          <p>various icons and logos are from <a target="_blank" href="http://fontawesome.io/">fontawesome.io</a> and <a target="_blank" href="http://websiddu.github.io/technology-icons/">websiddu.github.io/technology-icons</a></p>
        </div>
        <div className="me">
          <div id="pic"></div>
          <p className="pic-caption">contrary to popular belief Rachel is <em>not</em> a figment of your imagination</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
