import React, {Component} from 'react';
import SearchContainer from '../search/SearchContainer';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">
          &lt;Trackify&gt;
        </h1>
        <SearchContainer />
      </div>
    );
  }
}

export default App;
