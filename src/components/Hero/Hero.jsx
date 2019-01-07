import React, { Component } from 'react';
import './Hero.css';
import Parallax from 'parallax-js'
import video1 from '../../videos/cover-landscape.mp4';
import video2 from '../../videos/cover-mobile.mp4';
import bgvideo from '../../videos/bg.mp4';
import VIDEO from '../Video/VIDEO';


class Hero extends Component {


	componentDidMount() {
		
		// const scene = document.getElementsByClassName('Video')[0];

		//  console.log( this);
		
		// new Parallax(this.hej);

	}

	onChildCallHandler = () => {
		console.log('child callin');
		
	}
	onResize() {
		console.log('resize');
	}

	render() {
		
		return (
		
		<div id="Hero" >
			<VIDEO title="MrX" srcBG={ bgvideo } srcLandscape={ video1 } srcPortrait={ video2 } />
		</div>
		);
	}
	}

export default Hero;
