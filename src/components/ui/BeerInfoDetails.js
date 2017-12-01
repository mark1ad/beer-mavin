import React from 'react';
import { withRouter } from 'react-router-dom';



const BeerInfoDetails = (props) => {
  const goBack = e => {
    props.history.goBack();
  }

  return (
    <div className="beer-info-detail">
      <h2>{props.name}</h2>
      <div>
        {props.style}
      </div>
      <div>
        {props.abv ? "ABV: " + props.abv : ""}
        {props.ibu ? " IBU: " + props.ibu : ""}
      </div>
      <div>
        <ul>
          {props.breweries.map(brewery =>
            <li key={brewery.id}>{brewery.name}</li>
          )}
        </ul>
      </div>
      <div>
        {props.description}
      </div>

      <button className="btn btn-default" onClick={goBack}>Go Back</button>
    </div>
  )
}

export default withRouter(BeerInfoDetails);
