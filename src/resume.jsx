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
              desc: "420 hours of instruction in full-stack development with HTML, CSS, Javascript, SQL, and Python, producing four major projects throughout the course."
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
              duration: "Sept 2007 - June 2011",
              desc: "Graduated from a ABET-accredited mechanical engineering program with an elective emphasis in robotic algorithms and structural engineering. Participated in UCSB chapters of Society for the Advancement of Chicano and Native Americans (SACNAS) and the American Society of Mechanical Engineers (ASME)."
            }
          ]
        }
      ],
      employment: [
        {
          place: "Boeing Commercial Airplanes (BCA)",
          location: "Long Beach, CA",
          title: "Structural Analysis Engineer Level 2 for Interiors Stress",
          duration: "July 2011 - Aug 2014",
          desc: "Analyzed structural integrity of multiple airplane interior commodities onboard Boeing model series 757, 767, 777, and 787 per FAA regulations by developing and troubleshooting simulations."

        },
        {
          place: "University of California, Santa Barbara (UCSB)",
          location: "Santa Barbara, CA",
          title: "Lab Teaching Assistant for ME 10: Engineering Graphics",
          duration: "Mar 2011 - June 2011",
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
          duration: "Sept 2013 - Jun 2014",
          title: "Programming Mentor",
          desc: "Mentor for rookie FRC Team #4997, consisting of high school students from Long Beach Polytechnic, Wilson Classical, and Classical Conversations."
        },
        {
          program: "Engineering Week by Boeing (BCA)",
          duration: "Feb 2012 - Feb 2013",
          title: "Outreach Volunteer",
          desc: "Visited middle school classrooms yearly to generate interest in engineering fields and to present hands-on workshops on electromagnetism."
        },
        {
          program: "MESA Science and Technology Day at UCSB",
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

            <div className="resume-row">
              <div className="resume-glyph">
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
                <p>employment</p>
              </div>
              <div className="resume-content">
                {this.employment()}
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


        </div>
      </section>
    );
  }


  getEduPrograms(eduIndex) {
    return this.state.education[eduIndex].programs.map(program => {
      return (
        <div key={program.name}>
          <p className="resume-secondary">
            <span>{program.name}</span>
            <span>{program.duration}</span>
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
            <span className="resume-primary">{edu.place}</span>
            <span>{edu.location}</span>
          </p>
          {this.getEduPrograms(index)}
        </div>
      )
    });
  }

  employment() {
    return this.state.employment.map(job => {
      return (
        <div key={job.place}>
          <p className="resume-header">
            <span className="resume-primary">{job.place}</span>
            <span>{job.location}</span>
          </p>
          <p className="resume-secondary">
            <span>{job.title}</span>
            <span>{job.duration}</span>
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
          <p className="resume-header resume-primary">{vol.program}</p>
          <p className="resume-secondary">
            <span>{vol.title}</span>
            <span>{vol.duration}</span>
          </p>
          <p className="resume-desc">{vol.desc}</p>
        </div>
      )
    });
  }

}

export default Resume;
