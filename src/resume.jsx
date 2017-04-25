import React, { Component } from 'react';
import './resume.css';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [
        {
          place: "General Assembly Seattle",
          location: "Seattle, WA",
          programs: [
            {
              name: "Web Development Immersive",
              duration: "Nov 2016 - Feb 2017",
              desc: "Completed 480 hours of instruction in full-stack development with HTML, CSS, Javascript, SQL, and Python, producing four major projects throughout the course."
            },
            {
              name: "Data Science Part-time",
              duration: "Mar 2016 - May 2016",
              desc: "72 hours of instruction in data science and useful Python libraries, culminating in a final project at the end of the course."
            }
          ]
        },
        {
          place: "University of California, Santa Barbara (UCSB)",
          location: "Santa Barbara, CA",
          programs: [
            {
              name: "Bachelor of Science in Mechanical Engineering",
              duration: "Sept 2007 - Jun 2011",
              desc: "Graduated from a ABET-accredited mechanical engineering program with an elective emphasis in robotic algorithms and structural engineering. Participated in UCSB chapters of Society for the Advancement of Chicano and Native Americans (SACNAS) and the American Society of Mechanical Engineers (ASME)."
            }
          ]
        }
      ],
      experience: [
        {
          place: "General Assembly Seattle",
          location: "Seattle, WA",
          title: "Web Development Immersive Student",
          duration: "Nov 2016 - Feb 2017",
          desc: "Completed 480 hours of instruction in full-stack development with HTML, CSS, Javascript, SQL, and Python, producing four major projects throughout the course."

        },
        {
          place: "Boeing Commercial Airplanes (BCA)",
          location: "Long Beach, CA",
          title: "Structural Analysis Engineer Level 2 for Interiors Stress",
          duration: "July 2011 - Aug 2014",
          desc: "Analyzed and documented structural integrity of multiple airplane interior commodities onboard Boeing model series 757, 767, 777, and 787 per FAA regulations, building and troubleshooting computer simulations for each assembly."

        },
        {
          place: "University of California, Santa Barbara (UCSB)",
          location: "Santa Barbara, CA",
          title: "Lab Teaching Assistant for ME 10: Engineering Graphics",
          duration: "Mar 2011 - Jun 2011",
          desc: "Graded assignments and assisted students with computer-aided design coursework for up to eight hours per week."

        },
        {
          place: "Inovati Kinetic Metallization",
          location: "Goleta, CA",
          title: "Workshop Assistant and Intern",
          duration: "Nov 2009 - Jun 2010",
          desc: "Organized company product convention for domestic and international clients. Maintained workshop. Prepared and post-processed metallography test samples."

        }
      ],
      volunteering: [
        {
          program: "FIRST Robotics Competition (FRC)",
          location: "Long Beach, CA and St. Louis, MO",
          duration: "Sept 2013 - Jun 2014",
          title: "Programming Mentor",
          desc: "Mentor for rookie FRC Team #4997, consisting of high school students from Long Beach Polytechnic, Wilson Classical, and Classical Conversations."
        },
        {
          program: "Engineering Week by Boeing (BCA)",
          location: "Long Beach, CA",
          duration: "Feb 2012 - Feb 2013",
          title: "Outreach Volunteer",
          desc: "Visited middle school classrooms yearly to generate interest in engineering fields and to present hands-on workshops on electromagnetism."
        },
        {
          program: "MESA Science and Technology Day at UCSB",
          location: "Santa Barbara, CA",
          duration: "Mar 2009 - Mar 2011",
          title: "Workshop Volunteer",
          desc: "Presented hands-on workshops yearly on electromagnetism for visiting students in grades 6 – 12."
        }
      ]
    }
  }

  render() {
    return (
      <section className="section-wrapper" id="résumé">
        <div className="section-row">
        <div className="resume-downloads">
          <a target="_blank" href="https://drive.google.com/file/d/0B5Sc-S5t74hpM0xkVEFWbUNqQ2s/view">
            <i className="fa fa-file-pdf-o"></i> get my résumé as a PDF
          </a>
          <a target="_blank" href="https://drive.google.com/file/d/0B5Sc-S5t74hpMzFRdS1PWlZ3TGM/view?usp=sharing">
            <i className="fa fa-file-text-o"></i> and/or in plain text format
          </a>
        </div>
        <div className="resume-row">
          <div className="resume-glyph" onClick={this.toggleContent}>
            <i className="fa fa-graduation-cap"></i>
            <p>education</p>
          </div>
          <div className="resume-content">
            {this.education()}
          </div>
        </div>
        <div className="resume-row">
          <div className="resume-glyph">
            <i className="fa fa-industry"></i>
            <p>experience</p>
          </div>
          <div className="resume-content">
            {this.experience()}
          </div>
        </div>
        <div className="resume-row">
          <div className="resume-glyph">
            <i className="fa fa-group"></i>
            <p>volunteering</p>
          </div>
          <div className="resume-content">
            {this.volunteering()}
          </div>
        </div>
        <div className="resume-downloads-bottom">
          <a target="_blank" href="https://drive.google.com/file/d/0B5Sc-S5t74hpM0xkVEFWbUNqQ2s/view">
            get my résumé as a PDF <i className="fa fa-file-pdf-o"></i>
          </a>
          <a target="_blank" href="https://drive.google.com/file/d/0B5Sc-S5t74hpMzFRdS1PWlZ3TGM/view?usp=sharing">
            and/or in plain text format <i className="fa fa-file-text-o"></i>
          </a>
        </div>

        </div>
      </section>
    );
  }

  toggleContent() {
    console.log("lol");
  }

  getEduPrograms(eduIndex) {
    return this.state.education[eduIndex].programs.map(program => {
      return (
        <div key={program.name}>
          <p className="resume-secondary">
            <span className="resume-left">{program.name}</span>
            <span className="resume-right">{program.duration}</span>
          </p>
          <p className="resume-desc">{program.desc}</p>
        </div>
      )
    });
  }

  education() {
    return this.state.education.map((edu, index) => {
      return (
        <div key={edu.place}>
          <p className="resume-header">
            <span className="resume-primary resume-left">{edu.place}</span>
            <span className="resume-right">{edu.location}</span>
          </p>
          {this.getEduPrograms(index)}
        </div>
      )
    });
  }

  experience() {
    return this.state.experience.map(job => {
      return (
        <div key={job.place}>
          <p className="resume-header">
            <span className="resume-primary resume-left">{job.place}</span>
            <span className="resume-right">{job.location}</span>
          </p>
          <p className="resume-secondary">
            <span className="resume-left">{job.title}</span>
            <span className="resume-right">{job.duration}</span>
          </p>
          <p className="resume-desc">{job.desc}</p>
        </div>
      )
    });
  }

  volunteering() {
    return this.state.volunteering.map(vol => {
      return (
        <div key={vol.program}>
          <p className="resume-header">
            <span className="resume-primary resume-left">{vol.program}</span>
            <span className="resume-right">{vol.location}</span>
          </p>
          <p className="resume-secondary">
            <span className="resume-left">{vol.title}</span>
            <span className="resume-right">{vol.duration}</span>
          </p>
          <p className="resume-desc">{vol.desc}</p>
        </div>
      )
    });
  }

}

export default Resume;
