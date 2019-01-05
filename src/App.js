import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

	
	render() {

	const divStyle = {
		background: 'red'
		};
		
    return (
      <div className="App">
			<Person name="gustav" imgsrc="http://placehold.it/800x800"  />
			{/* <Person name="gustav" imgsrc="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/10f74a74344077.5c2cf6c74af04.gif" /> */}
			<div style={divStyle}>lorem</div>
      </div>
    );
  }
}

export default App;
