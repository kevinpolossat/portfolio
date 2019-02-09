import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Profile">Kevin Polossat</h1>
        <p className="Desc">
          Hello, World!
        </p>
        <div className="SocialList">
          <a href="https://linkedin.com/in/kévin-polossat" target="_blank" className="fa fa-linkedin"></a>
          <a href="https://github.com/kevinpolossat" target="_blank" className="fa fa-github"></a>
        </div>
      </div>
    )
  }
}

export default App;
