import { FaHeart, FaHeartBroken } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function ApartmentCard(props) {
  const { apartment, clickToDelete, handleFavourite } = props;
  
  const [favourited, setFavourited] = useState(false);

  const renderLabels = () => {
    const labels = [];

    if (apartment.price <= 75) {
      labels.push(<span key="great-deal" className="label great-deal">Great Deal</span>);
    }

    if (apartment.review_scores_rating >= 70) {
      labels.push(<span key="top-review-score" className="label top-review-score">Top Reviews</span>);
    }

    if (apartment.room_type === "Entire home/apt" ) {
      labels.push(<span key="entire-home" className="label entire-home">Entire Apartment</span>);
    }

    if (apartment.cancellation_policy === "flexible" ) {
      labels.push(<span key="flexible-cancellation" className="label flexible-cancellation">flexible cancellation</span>);
    }

    return labels;
  };



  return (
    <div className="apartment-card">
      <div className="apartment-card-right">
        <p className="dachzeile">
          {apartment.country} / {apartment.city} / {apartment.neighbourhood}
        </p>
        <Link to={`/apartment/${apartment.id}`}><h3>{apartment.name}</h3> </Link>
        <p>
          {apartment.property_type} / {apartment.room_type}
        </p>
        <p>
          <strong>Price:</strong> {apartment.price} €
        </p>
        <p>
          {apartment.space}
        </p>

        

        <p className="numbers-bar">Max {apartment.accommodates} persons | Bedrooms: {apartment.bedrooms} | Beds: {apartment.beds} | Bathrooms: {apartment.bathrooms}</p>
        <div className="labels">
          {renderLabels()}
        
        </div>
      

        <button
          onClick={() => clickToDelete(apartment.id)}
          className="btn-delete"
        >
          Delete
        </button>

        <button
            onClick={() => (handleFavourite(apartment.id), setFavourited(!favourited))}
            type="button"
            className="card__button"
          >
            {favourited ? <FaHeartBroken /> : <FaHeart />}
          </button>
        
      </div>
    </div>
  );
}

export default ApartmentCard;
