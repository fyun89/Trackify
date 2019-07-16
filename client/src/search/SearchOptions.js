import React, {Component} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class SearchOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDataConv = this.handleDataConv.bind(this);
  }

  handleDataConv(e) {
    let output;
    switch(e) {
      case 'Top Results': output = 'all';
      break;
      case 'Songs': output = 'tracks';
      break;
      case 'Artists': output = 'artists';
      break;
      case 'Albums': output = 'albums';
      break;
      default: output = e;
    }
    return output;
  }

  render() {
    // const options = this.props.options;
    // const changeOptions = this.props.changeOptions;
    // const selectedOption = this.props.selectedOption;
    const { options, changeOptions, selectedOption, resultCount } = this.props;
    const handleDataConv = this.handleDataConv;
    console.log('result count', resultCount)
    return (
      <div className="options" >
        <Row >
        {options.map(elem => {
          if (selectedOption === elem) {
            return (
              <Col sm="3" key={`id_${elem}`}>
                <Button variant="success" id="selected" value={elem} onClick={(e) => changeOptions(e)}>{`${elem} (${resultCount[handleDataConv(elem)] ? resultCount[handleDataConv(elem)] : 0})`}</Button>
              </Col>
            );
          } else {
            return (
              <Col sm="3" key={`id_${elem}`}>
                <Button variant="success" id="option" value={elem} onClick={(e) => changeOptions(e)}>{`${elem} (${resultCount[handleDataConv(elem)] ? resultCount[handleDataConv(elem)] : 0})`}</Button>
              </Col>
            );
          }
        })}
        </Row>
      </div>
    );
  }
}

export default SearchOptions;
