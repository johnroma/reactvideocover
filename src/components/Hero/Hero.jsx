import React, { Component } from 'react';
import './Hero.css';
import VideoStory from '../VideoStory/VideoStory'



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
			<VideoStory />
		</div>
		);
	}
	}

export default Hero;
