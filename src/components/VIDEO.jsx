import React from 'react';

const VIDEO = ( props ) => {
	
	let textPrinter = () => <h1 data-depth="0.2">{ props.title }</h1>;
	let bgColorize = () =>
	{
		return(
			<video id="bgvideo" autoPlay muted playsInline>
				<source src={ props.bgvideosrc } type="video/mp4"></source>
			</video>
		)
	}
	
	return (
		<React.Fragment>
		{ props.bgvideosrc? bgColorize():"" }
		<div className="Video">
			<video data-depth="0.7" autoPlay loop muted playsInline>
				<source src={ props.videosrc } type="video/mp4"></source>
			</video>
			{ props.title? textPrinter():"" }
		</div>
		</React.Fragment>
	)
}

export default VIDEO;
