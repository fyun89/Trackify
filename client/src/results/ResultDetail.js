import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

function ResultDetail(props) {
  console.log('at result detail', props.data)
  const { handleDynamicResults, handleLabelConversion, handleData, data } = props
  return (
    <Col sm="6">
      <div id="resultDetail">
        {handleDynamicResults(data).slice(3).map(e => (
          <div>
          {`${handleLabelConversion(e)}: `}{handleData(data, e)}
          </div>
        ))}
      </div>
    </Col>
  );
}

export default ResultDetail;
