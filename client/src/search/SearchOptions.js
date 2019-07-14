import React, {Component} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
//import './search.css';

class SearchOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const options = this.props.options;
    const changeOptions = this.props.changeOptions;
    return (
      <div className="options" >
        <Row >
        {options.map(elem => {
          return (
            <Col sm="3" key={`id_${elem}`}>
              <Button variant="option" value={elem} onClick={(e) => changeOptions(e)}>{elem}</Button>
            </Col>
          );
        })}
        </Row>
      </div>
    );
  }
}

export default SearchOptions;
