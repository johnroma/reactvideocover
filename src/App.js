import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
			<Person name="gustav" />
			<div>lorem</div>
      </div>
    );
  }
}

export default App;
