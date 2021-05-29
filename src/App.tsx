import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  return (
    <div className="app">
        <p className="spacer">
        Kay Men Yap
        </p>
        <p className="spacer">
        Computer Science Graduate
        </p>
        <div className="spacer">
          <a href="/Kay_Men_Yap_Resume-v2.pdf">Resume</a>
        </div>
        <div className='links'>
          <a href="https://github.com/Chraser"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
          <a href="mailto:yapkaymen@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="3x"/></a>
          <a href="https://www.linkedin.com/in/kay-men-yap-aa63bb181/"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a>
        </div>
    </div>
  );
}

export default App;
