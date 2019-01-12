import React, { Component } from 'react';
import video1 from '../../videos/cover-landscape.mp4';
import alt from '../../videos/alt.mp4';
import video2 from '../../videos/cover-mobile.mp4';
import bgvideo1 from '../../videos/bg.mp4';
import VIDEO from '../Video/VIDEO';

class VideoStory extends Component {
	state = {
		vidSources:  [
			{ bg: bgvideo1, landscape:alt, portrait:video2 },
			{ bg: bgvideo1, landscape:video1, portrait:video2 }
		],
		looping: [false,true],
		currentVideo: 0
	}


	componentDidMount() { 
		// setTimeout(() => {
		// 	console.log( 'ab');
		// 	this.setState( { currentVideo: 1 })
		// }, 17000);
	}

	onVideoEnd = () => { 
		 this.setState( { currentVideo: this.state.currentVideo+1 });
	}
	render() { 
		let index = this.state.currentVideo;
		let {bg:bgsrc,landscape:lsrc, portrait:psrc } = this.state.vidSources[index];
		let {looping} = this.state;
		
		return ( 
			<VIDEO onVideoEnd={ this.onVideoEnd } loop={ looping[index] } srcBG={ bgsrc } srcLandscape={lsrc } srcPortrait={  psrc } />
	);
	}
}
 
export default VideoStory;