import React, { Component } from 'react';
import video1 from '../../videos/cover-landscape.mp4';
import alt from '../../videos/alt.mp4';
import video2 from '../../videos/cover-mobile.mp4';
import bgvideo1 from '../../videos/bg.mp4';
import VIDEO from '../Video/VIDEO';

class VideoStory extends Component {
	state = {
		vidSources:  [
			{ bg: bgvideo1, landscape:video1, portrait:video2 },
			{ bg: bgvideo1, landscape:alt, portrait:video2 }
		],
		currentPosition: 0
	}


	componentDidMount() { 
		setTimeout(() => {
			console.log( 'ab');
			this.setState( { currentPosition: 1 })
		}, 7000);
	}
	render() { 
		
		return ( 
			<VIDEO srcBG={ this.state.vidSources[this.state.currentPosition].bg } srcLandscape={this.state.vidSources[this.state.currentPosition].landscape } srcPortrait={ this.state.vidSources[this.state.currentPosition].portrait } />
	);
	}
}
 
export default VideoStory;