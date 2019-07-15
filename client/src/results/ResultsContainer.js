import React, {Component} from 'react';
import { Row } from 'react-bootstrap'
import Result from './Result'

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
          {options.map(elem => {
            return (
              <div>
                <h2>{elem}</h2>            
                <Row>
                {
                  data[mapOptions[elem]].slice(0,6).map(elem => <Result data={elem}/>)
                }
                </Row>
              </div>
            )
          })}
        </div>
     ) : (
      <div>
        <h2>Results:</h2>
        {
          selectedData.map(elem => <Result data={elem} />)
        }
      </div>
     )
  }
}

export default ResultsContainer;
