import React from 'react';

const video = ( props ) => {
	return (
		<div className="Video">
			<video autoPlay loop muted playsInline>
				<source src={ props.videosrc } type="video/mp4"></source>
			</video>
			<h1>Hello there {props.name}</h1>
		</div>
	)
}

export default video;
