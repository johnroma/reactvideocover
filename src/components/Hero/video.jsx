import React from 'react';



const VIDEO = ( props ) => {
	
	return (
		<div className="Video">

				<video data-depth="0.7" autoPlay loop muted playsInline>
					<source src={ props.videosrc } type="video/mp4"></source>
				</video>
				<h1 data-depth="0.2">Hello there {props.name}</h1>
	
		</div>
	)
}

export default VIDEO;
