import React from 'react';
import { Col } from 'react-bootstrap';

function ResultDetail(props) {
  const { handleDynamicResults, handleLabelConversion, handleData, data } = props
  return (
    <Col sm="6">
      <div id="resultDetail">
        {handleDynamicResults(data).slice(3).map(e => (
          <div key={'key_' + e}>
          {`${handleLabelConversion(e)}: `}{handleData(data, e)}
          </div>
        ))}
      </div>
    </Col>
  );
}

export default ResultDetail;
