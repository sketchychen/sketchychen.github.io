import React, { Component } from 'react';
import './App.css';

import Home from './home.jsx';
import Resume from './resume.jsx';
import Projects from './projects.jsx';
import About from './about.jsx';
import Footer from './footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="container" id="content">
        <Home />
        <Resume />
        <Projects />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
