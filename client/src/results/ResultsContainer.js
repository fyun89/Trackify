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
    const { selectedOption, data, query } = this.props;
    const mapOptions = {Songs: "tracks", Artists: "artists", Albums: "albums"};
    const options = this.props.options.slice(1);
    const selectedData = data[mapOptions[selectedOption]];
    return (selectedOption === 'Top Results') ? (
        <div>
          <br></br>
          {options.map(elem => {
            // Top Results option (default) shows top 6 results for other options
            return (
              <div key={'resultContainer_key_' + elem}>
                <h2>{elem}</h2>            
                <Row>
                {data[mapOptions[elem]].slice(0,6).map((e, i) => <Result key={'result_key_'+ i + elem} query={query} option={mapOptions[elem]} data={e}/>)}
                </Row>
              </div>
            );
          })}
        </div>
     ) : (
      <div>
        <br></br>
        <Row>
        {
          selectedData.map((elem, i) => {
            return <Result key={'selectedData_key_' + i} selectedOption={selectedOption} data={elem}/>
          })
        }
        </Row>
      </div>
     )
  }
}

export default ResultsContainer;
