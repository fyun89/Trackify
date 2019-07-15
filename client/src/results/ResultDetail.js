import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

function ResultDetail(props) {
  console.log('at result detail', props.data)
  return (
    <Col sm="6" onClick={(e) => props.handleClick(e)}>
      <div>
        DETAIL
      </div>
    </Col>
  );
}

export default ResultDetail;
