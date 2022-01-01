import React from "react";

const Listingservices = ({ src, title, des, price }) => {
  return (
    <div className="listingservices-container">
      <div className="listingservices-img">
        <img src={src} />
      </div>
      <div className="listingservices-details">
        <div className="listingservices-details-title">{title}</div>
        <div className="listingservices-details-description">{des}</div>
        <div className="listingservices-details-price">{price}</div>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default Listingservices;
