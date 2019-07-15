import React, {Component} from 'react';
import { Row } from 'react-bootstrap'
import Result from './Result'
import './results.css'

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const selectedOption = this.props.selectedOption; //Top Results, Songs, Artists, Albums
    const mapOptions = {Songs: "tracks", Artists: "artists", Albums: "albums"};
    const options = this.props.options.slice(1);
    const data = this.props.data; //{tracks, artists, albums} ea. array
    const selectedData = data[mapOptions[selectedOption]];
    return (selectedOption === 'Top Results') ? (
        <div>
          <br></br>
          {options.map(elem => {
            // Top Results option (default) shows top 6 results for other options
            return (
              <div>
                <h2>{elem}</h2>            
                <Row>
                {data[mapOptions[elem]].slice(0,6).map(e => <Result option={mapOptions[elem]} data={e}/>)}
                </Row>
              </div>
            );
          })}
        </div>
     ) : (
      <div>
        <br></br>
        <Row>
        { // Individual search options
          selectedData.map(elem => <Result data={elem} />)
        }
        </Row>
      </div>
     )
  }
}

export default ResultsContainer;
