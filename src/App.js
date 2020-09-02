import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="col">
          <div><span>A:</span><span>{this.props.a}</span></div>
          <button>Update A</button>
        </div>
        <div className="col">
          <div><span>B:</span><span>{this.props.b}</span></div>
          <button>Update B</button>
        </div>
      </div>
    )
  }
}

export default App;
