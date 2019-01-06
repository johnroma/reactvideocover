import React, { Component } from 'react';
import './Hero.css';
import Parallax from 'parallax-js'
import mainvideo from '../../videos/cover.mp4';
import bgvideo from '../../videos/bg.mp4';
import VIDEO from './VIDEO';


class Hero extends Component {

	constructor(props) {
		super(props);

	  }

	componentDidMount() {
		const scene = document.getElementsByClassName('Video')[0];
		 new Parallax(scene);

	}

	onResize() {
		console.log('resize');
		
	}
	render() {
		
		return (
		
		<div id="Hero">
				<video id="bgvideo" autoPlay muted playsInline>
					<source src={ bgvideo } type="video/mp4"></source>
				</video>
				<VIDEO name="Mr X" videosrc={ mainvideo } />
		</div>
		);
	}
	}

export default Hero;
