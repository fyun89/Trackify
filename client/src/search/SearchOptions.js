import React, {Component} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class SearchOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const options = this.props.options;
    const changeOptions = this.props.changeOptions;
    const selectedOption = this.props.selectedOption;
    return (
      <div className="options" >
        <Row >
        {options.map(elem => {
          if (selectedOption === elem) {
            return (
              <Col sm="3" key={`id_${elem}`}>
                <Button variant="success" id="selected" value={elem} onClick={(e) => changeOptions(e)}>{elem}</Button>
              </Col>
            )
          } else {
            return (
              <Col sm="3" key={`id_${elem}`}>
                <Button variant="success" id="option" value={elem} onClick={(e) => changeOptions(e)}>{elem}</Button>
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
