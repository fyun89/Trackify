import React, {Component} from 'react';
import SearchContainer from '../search/SearchContainer';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // componentDidMount() {
  //   //console.log('test encode', CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(`${credentials.client_id}:${credentials.client_secret}`)))
  //   fetch('http://localhost:3001/getToken')
  //   .then(res => res.json())
  //   .then(res => {console.log(JSON.stringify(res))})
  // }

  render() {
    return (
      <div className="App">
        <h1 className="title">
          Trackify
        </h1>
        <SearchContainer />
      </div>
    );
  }
}

export default App;
