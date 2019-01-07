import React from 'react';
import './VIDEO.css';


const VIDEO = ( props ) => {
	
	let textPrinter = () => <h1 data-depth="0.2">{ props.title }</h1>;
	let landscapeSrc = () => <source src={ props.srcLandscape } type="video/mp4" media={ props.srcPortrait? "screen and (orientation:landscape)":""}/>;
	let portraitSrc = () => <source src={ props.srcPortrait } type="video/mp4" media="screen and (max-width:767px)" />;

	let bgColorize = () =>
	{
		return(
			<video id="bgvideo" autoPlay muted playsInline>
				<source src={ props.srcBG } type="video/mp4"></source>
			</video>
		)
	}
	
	return (
		<React.Fragment>
			{ props.srcBG? bgColorize():"" }
			<div className="Video">
				<video id="landscape" data-depth="0.7" autoPlay loop muted playsInline>
				{ props.srcLandscape? landscapeSrc():"" }
				{ props.srcPortrait? portraitSrc():"" }
					
				</video>
				{ props.title? textPrinter():"" }
			</div>
		</React.Fragment>
	)
}

export default VIDEO;
