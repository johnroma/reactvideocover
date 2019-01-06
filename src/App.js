import React, { Component } from 'react';
import Hero from './components/Hero/Hero';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
		<div>lorem ipsum</div>
      </React.Fragment>
    );
  }
}

export default App;