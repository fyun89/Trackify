import React, {Component} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userQuery: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    //console.log('query type: ', e.target.value)
    this.setState({userQuery: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleQuery(this.state.userQuery)
  }

  render() {
    // input is sanitized by default by React
    return (
      <div className="App">
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Row>
            <Col sm="10">
              <Form.Group controlId="formQuery">
                <Form.Control type="query" placeholder="Search here" onChange={(e) => this.handleChange(e)} />
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
