import React, { useState } from "react";

export default function Tour({ id, image, info, name, price, filterTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="single-tour">
      <img src={image} alt={name} />
      <div className="footer">
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 150)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button onClick={() => filterTour(id)} className="delete-btn">
          Not Interested
        </button>
      </div>
    </div>
  );
}
