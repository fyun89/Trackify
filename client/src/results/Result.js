import React, {Component} from 'react';
import { Col } from 'react-bootstrap';
import ResultDetail from './ResultDetail';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const isClicked = this.state.clicked;
    if (isClicked) {
      this.setState({clicked: false});
    } else {
      this.setState({clicked: true});
    }
  }

  render(){
    const handleClick = this.handleClick;
    const isClicked = this.state.clicked;
    if (isClicked) {
      return <ResultDetail handleClick={handleClick}/>
    } else {
      return (
        <Col sm="6">
          <div onClick={() => handleClick()}>
            A Result
          </div>
        </Col>
      );
    }
  }
}

export default Result;
