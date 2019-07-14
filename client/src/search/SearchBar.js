import React, {Component} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Form>
          <Row>
            <Col sm="10">
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Search here" />
              </Form.Group>
            </Col>
            <Col sm = "2">
              <Button variant="success" id="searchBtn" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
