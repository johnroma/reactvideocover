import React, { Component } from 'react';
import Hero from './components/Hero/Hero';
import VIDEO from './components/Video/VIDEO'
import video1 from './videos/cover-landscape.mp4';
import video2 from './videos/cover-mobile.mp4';
import bgvideo from './videos/bg.mp4';

class App extends Component {
  render() {
    return (
      <React.Fragment>
		  <Hero />
		<div>lorem ipsum</div>
      </React.Fragment>
    );
  }
}

export default App;