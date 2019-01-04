import React from 'react';

const person = ( props ) => {
	return (
		<div className="Person">
			<img className="fullsc" src="http://placehold.it/80x80" alt="no"/>
			<p>Hello there {props.name}</p>
		</div>
		
	)
}

export default person;
