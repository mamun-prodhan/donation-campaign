import React from "react";

const DonatedCard = ({ data }) => {
  const {
    id,
    picture,
    title,
    category,
    price,
    card_bg,
    category_bg,
    text_color,
  } = data;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Movie" />
      </figure>
      <div className="card-body">
        <span
          className="px-3 py-1 text-sm font-semibold rounded-md"
          style={{ backgroundColor: category_bg }}
        >
          {category}
        </span>
        <h2 className="card-title">{title}</h2>
        <p>${price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">view details</button>
        </div>
      </div>
    </div>
  );
};

export default DonatedCard;
