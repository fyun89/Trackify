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

  handleClick(e) {
    e.preventDefault()
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
    const data = this.props.data;
    const option = this.props.option;
    // if (isClicked) {
    //   return <ResultDetail data={data} handleClick={handleClick}/>
    // } else {
      return (
        <Col sm="6">
          <div onClick={(e) => handleClick(e)} id="result">
            <img src={data.album.images[2].url} alt={`album img ${data.name}`}></img>
            <div id="info-basic">
              {data.name}
              <p>TEST</p>
            </div>
            {isClicked ? <ResultDetail data={data} handleClick={handleClick}/> : null}
            
          </div>
        </Col>
      );
    // }
  }
}

export default Result;
