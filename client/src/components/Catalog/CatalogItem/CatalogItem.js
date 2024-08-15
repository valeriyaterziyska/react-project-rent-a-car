import { Link } from "react-router-dom";

export const CatalogItem = ({ _id, brand, model, price, imageUrl }) => {
  return (
    <div>
      <div className="added-cars">
        <div className="added-cars-in-market">
          <img className="picture-added-cars" src={imageUrl} />

          <h3>
            Brand:{brand} and {model}
          </h3>
          <span>Price per day: ${price}</span>
          <Link to={`/catalog/${_id}`} className="button-details">Details</Link>
        </div>
      </div>
    </div>
  );
};
