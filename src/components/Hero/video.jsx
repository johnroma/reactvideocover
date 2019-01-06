import React from 'react';



const video = ( props ) => {
	
	return (
		<div className="Video">
			<div id="parascene">
				<video data-depth="0.7" autoPlay loop muted playsInline>
					<source src={ props.videosrc } type="video/mp4"></source>
				</video>
				<h1 data-depth="0.2">Hello there {props.name}</h1>
			</div>
		</div>
	)
}

export default video;
