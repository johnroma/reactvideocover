import React, { Component } from 'react';
import './Hero.css';
import Parallax from 'parallax-js'
import mainvideo from '../../videos/cover.mp4';
import bgvideo from '../../videos/bg.mp4';
import Video from './video';


class Hero extends Component {


componentDidMount() {
	const scene = document.getElementById('parascene');
	new Parallax(scene);

}
render() {
	
    return (
	
      <div id="Hero">
	  		<video id="bgvideo" autoPlay muted playsInline>
				<source src={ bgvideo } type="video/mp4"></source>
			</video>
			<Video name="Mr X" videosrc={ mainvideo } />
      </div>
    );
  }
}

export default Hero;
