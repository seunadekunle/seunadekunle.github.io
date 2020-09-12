import React, { useRef } from 'react';

import Home from './components/Home.js';
import About from './components/About.js';


import portrait from './assets/img/seun_is_cold.png';
import { paragraph1, paragraph2, paragraph3, paragraph4 } from './assets/text/description.js';

import './App.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className="nav">

        <li id="action"><a href="https://www.canva.com/design/DAD-03_5V6c/l3eG1z2NTT4J8zJJ3bY5_w/view">resume</a></li>
        <li><Link>contact</Link></li>
        <li><Link>projects</Link></li>

        <li><Link>about</Link></li>

        <li id="home"><Link to="/"><strong>seun</strong></Link></li>

      </div>

      <Route path='/' exact component={Home} />
      <Route path="/about"><About id={'section1'} text="about" description1={paragraph1}
        description2={paragraph2} description3={paragraph3} description4={paragraph4} url={portrait} /></Route>

      <Home id="home-page" />
      <About id={'section1'} text="about" description1={paragraph1}
        description2={paragraph2} description3={paragraph3} description4={paragraph4} url={portrait} />
      {/* </Router> */}
    </div>
  );
}

export default App;
