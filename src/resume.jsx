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
              duration: "March 2016 - May 2016",
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
          positions: [
            {
              title: "Structural Analysis Engineer Level 2 for Interiors Stress",
              duration: "July 2011 - August 2014",
              desc: "Analyzed structural integrity of multiple airplane interior commodities onboard Boeing model series 757, 767, 777, and 787 per FAA regulations by developing and troubleshooting simulations."
            }
          ]
        },
        {
          place: "University of California, Santa Barbara (UCSB)",
          location: "Santa Barbara, CA",
          positions: [
            {
              title: "Lab Teaching Assistant for ME 10: Engineering Graphics",
              duration: "March 2011 - June 2011",
              desc: "Graded assignments and assisted students with computer-aided design coursework for up to eight hours per week."
            }
          ]
        },
        {
          place: "Inovati Kinetic Metallization",
          location: "Goleta, CA",
          positions: [
            {
              title: "Workshop Assistant and Intern",
              duration: "Nov 2009 - Jun 2010",
              desc: "Organized company product convention for domestic and international clients. Maintained workshop. Prepared and post-processed metallography test samples."
            }
          ]
        }
      ],
      volunteering: [
        {
          program: "FIRST Robotics Competition (FRC)",
          duration: "Sep 2013 - Jun 2014",
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
