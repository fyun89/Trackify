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
        SEARCH BAR
        <Form>
          <Row>
            <Col sm="10">
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Search here" />
              </Form.Group>
            </Col>
            <Col sm = "2">
              <Button variant="primary" type="submit">
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
