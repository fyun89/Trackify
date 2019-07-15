import React, {Component} from 'react';
import { Col } from 'react-bootstrap';

function ResultDetail(props) {
  return (
    <Col sm="12" onClick={() => props.handleClick()}>
      A Result
    </Col>
  );
}

export default ResultDetail;
