import React, { Component } from 'react';
import video1 from '../../videos/square.mp4';
import introvid from '../../videos/intro.mp4';
import video2 from '../../videos/cover-mobile.mp4';
import bgvideo1 from '../../videos/bg.mp4';
import VIDEO from '../Video/VIDEO';

class VideoStory extends Component {
	state = {
		vidSources:  [
			{ bg: bgvideo1, landscape:introvid, portrait:bgvideo1, looping: false },
			{ bg: bgvideo1, landscape:video1, portrait:bgvideo1, looping: true }
		],
		currentVideo: 0
	}


	componentDidMount() { 
		// setTimeout(() => {
		// 	console.log( 'ab');
		// 	this.setState( { currentVideo: 1 })
		// }, 17000);
	}

	onVideoEnd = () => {
		setTimeout(() => {
				console.log( 'ab');
				this.setState( { currentVideo: this.state.currentVideo+1 });
			}, 10);
		 
	}

	prepVideo (v, i) {
		return <VIDEO disp={ i==this.state.currentVideo? true:false } key={ v.landscape } onVideoEnd={ this.onVideoEnd } loop={ v.looping } srcBG={ v.bg } srcLandscape={v.landscape } srcPortrait={ v.portrait } />
	}

	render() { 

		const arr = this.state.vidSources;
		return ( 
			<React.Fragment>
				{ arr.map( (v, i) => this.prepVideo(v,i) )}
			</React.Fragment>
	);
	}
}
 
export default VideoStory;