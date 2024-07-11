import React from "react";

function ApartmentCard(props) {
  const { apartment, clickToDelete } = props;
  /* 
  const renderLabels = () => {
    const labels = [];

    if (apartment.price <= 75) {
      labels.push(<span key="great-deal" className="label great-deal">Great Deal</span>);
    }

    if (review_scores_rating >= 90) {
      labels.push(<span key="top-ranking" className="label top-ranking">Top Rating</span>);
    }

    if (apartment.room_type === "Entire home/apt" ) {
      labels.push(<span key="entire-home" className="label entire-home">Entire Apartment</span>);
    }

    return labels;
  };

*/

  return (
    <div className="apartment-card">
      <div className="apartment-card-right">
        <p className="dachzeile">
          {apartment.country} / {apartment.city} / {apartment.neighbourhood}
        </p>
        <h3>{apartment.name}</h3>
        <p>
          {apartment.property_type} / {apartment.room_type}
        </p>
        <p>
          <strong>Price:</strong> {apartment.price} €
        </p>
        <p>{apartment.description}</p>

        {/*<div>
          {renderLabels()}
        </div>*/}

        <br></br>
        <button
          onClick={() => clickToDelete(apartment.id)}
          className="btn-delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ApartmentCard;
