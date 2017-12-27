import React from 'react';
import { withRouter } from 'react-router-dom';

const GoBackBtn = (props) => {
  const goBack = e => {
    props.history.goBack();
  }

  return (
    <div className="text-center">
      <button className="btn btn-default" onClick={goBack}>Go Back</button>
    </div>
  )
}

export default withRouter(GoBackBtn);
