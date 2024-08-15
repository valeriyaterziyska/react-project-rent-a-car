export const CatalogItem = ({
    brand,
    model, 
    price,
    imageUrl
}) => {
  return (
    <div>
      <div className="added-cars">
        <div className="added-cars-in-market">
          <img className="picture-added-cars" src={imageUrl} />

          <h3>Brand:{brand} and {model}</h3>
          <span>Price per day: ${price}</span>
          <button type="button" >Details</button>
        </div>
      </div>
    </div>
  );
};
