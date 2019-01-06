import React, { Component } from 'react';
import './Hero.css';
import Parallax from 'parallax-js'
import mainvideo from '../../videos/cover.mp4';
import bgvideo from '../../videos/bg.mp4';
import VIDEO from '../VIDEO';


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
			<VIDEO title="MrX" bgvideosrc={ bgvideo } videosrc={ mainvideo } />
		</div>
		);
	}
	}

export default Hero;
