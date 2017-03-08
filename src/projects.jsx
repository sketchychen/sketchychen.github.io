import React, { Component } from 'react';
import './projects.css';

import Thumbnail from './thumbnail.jsx';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: "Laser Eye Beam Simulator",
          img: "../public/img/portfolio/laser-simulator.gif",
          thumb: "thumbnail-lasersimulator",
          github: "https://github.com/skylocke/laser-eye-beam-simulator",
          url: "http://rschen.co/laser-eye-beam-simulator/",
          tech: ["HTML5", "CSS3", "JavaScript", "A-Frame VR"],
          desc: "now you, too, can pretend to have laser eyes, provided you're using a smart phone with a VR peripheral"
        },
        {
          name: "Duckface",
          img: "../public/img/portfolio/duckface.png",
          thumb: "thumbnail-duckface",
          url: "http://duckface.herokuapp.com/",
          github: "https://github.com/skylocke/duck-face",
          tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "Node.js",
                "PostgreSQL", "Heroku"],
          desc: "bringing duckface back by auto-superimposing duck beaks over faces in your photos for you"
        },
        {
          name: "Subtvtle",
          img: "../public/img/portfolio/subtvtle.png",
          thumb: "thumbnail-subtvtle",
          url: "",
          github: "https://github.com/skylocke/ng-mongoose-subtitles",
          tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "Node.js",
                "AngularJS", "MongoDB"],
          desc: "add your own spin to the subtitles for the meme-infamous scene from the movie Downfall (2004)"
        },
        {
          name: "8-Bit Chat",
          img: "../public/img/portfolio/8-bit-chat.gif",
          thumb: "thumbnail-8bitchat",
          url: "http://eightbitchat.herokuapp.com/",
          github: "https://github.com/skylocke/8-bit-chat",
          tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "Node.js",
                "AngularJS", "MongoDB", "Heroku"],
          desc: "talk to other fellow colorful rectangle people in this 8-bit-styled avatar chat room"
        },
        {
          name: "Gube Roldberg",
          img: "thumbnail-guberoldberg",
          thumb: "thumbnail-guberoldberg",
          url: "http://guberoldberg.herokuapp.com/",
          github: "https://github.com/Skylocke/gube-roldberg",
          tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "Node.js",
                "AngularJS", "MongoDB", "Heroku"],
          desc: "make simple rube-goldberg-esque contraptions with the gube roldberg interface"
        },
        {
          name: "Taste Saver",
          img: "../public/img/portfolio/taste-saver.png",
          thumb: "thumbnail-tastesaver",
          url: "",
          github: "https://github.com/Skylocke/picky-eater-hackathon",
          tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "Node.js",
                "AngularJS", "MongoDB", "Heroku"],
          desc: "catalogue recipes from around the internet with the result of a one-day hackathon collaboration"
        }
      ]
    };

  }

  render() {
    return (
      <section className="section-wrapper" id="projects">
      <div className="section-row">
        <div className="section-content">
          <h1>Here are some things.</h1>
          <p><small>Curious what a particular icon represents? Hover your mouse over it.</small></p>
          <div className="projects">
            {this.thumbnails()}
          </div>
        </div>
      </div>
    </section>
    );
  }

  thumbnails() {
    return this.state.projects.map((project, index) => {
      return <Thumbnail key={project.name} id={index} name={project.name}
                        img={project.img} thumb={project.thumb} href={project.url}
                        github={project.github} tech={project.tech} desc={project.desc} />
    });
  }

}

export default Projects;
