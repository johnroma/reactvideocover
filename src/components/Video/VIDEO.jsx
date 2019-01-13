import React from 'react';
import './VIDEO.css';


const VIDEO = ( props ) => {
	
	let landscapeSrc = () => <source src={ props.srcLandscape } type="video/mp4" media={ props.srcPortrait? "screen and (orientation:landscape)":""}/>;
	let portraitSrc = () => <source src={ props.srcPortrait } type="video/mp4" media="screen and (max-width:767px)" />;

	let bgColorize = () =>
	{
		return(
			<div className="bgvideo-container" style={ props.disp? { display:'block' }:{ display:'none' } }>
				<video className="bgvideo" autoPlay muted playsInline key={ props.srcBG }>
					<source src={ props.srcBG } type="video/mp4"></source>
				</video>
			</div>
		)
	}

	return (
		<React.Fragment>
			{ props.srcBG? bgColorize():null }
			<div className="Video" style={ props.disp? { display:'block' }:{ display:'none' } }> 
				<video autoPlay loop={ props.loop }  muted playsInline key={ props.srcLandscape} onEnded={ props.onVideoEnd }>
				{ landscapeSrc() }
				{ props.srcPortrait? portraitSrc():null }
					
				</video>
			</div>
		</React.Fragment>
	)
}

export default VIDEO;
