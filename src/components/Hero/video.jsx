import React from 'react';

const video = ( props ) => {
	return (
		<div className="Video">
			<video autoPlay loop muted playsInline>
				<source src={ props.videosrc } type="video/mp4"></source>
			</video>
			<p>Hello there {props.name}</p>
		</div>
	)
}

export default video;
