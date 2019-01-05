import React from 'react';

import bgColor from './../videos/bg.mp4';

const videohero = ( props ) => {
	return (
		<div className="Videohero">

			<video className="hero-bgvideo"  autoPlay muted playsInline>
				<source src={bgColor} type="video/mp4"></source>
				
				</video>
				<img className="fullsc" src={bgColor} alt=""/> 
			{/* <img className="fullsc" src={ props.imgsrc } alt=""/> */}
			<p>Hello there {props.name}</p>
		</div>
		
	)
}

export default videohero;
