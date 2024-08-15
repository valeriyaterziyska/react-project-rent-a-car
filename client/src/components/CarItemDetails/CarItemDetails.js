export const CarItemDetails = () => {
  return (
    <section id="detailsPage">
      <div id="detailsInfo">
        <div class="info">
          <img src="{{car.imageUrl}}" />
        </div>

        <div class="info">
          <h3>Brand: Brand</h3>
          <h3>Model: model</h3>
          <h2>Price per day: $</h2>
        </div>

        {/* <!--If there is user logged in--> */}
        <div class="buttons">
          <a class="buy-btn">Add to Test Drive Catalog</a>
          <a class="edit-btn">Edit</a>
          <a class="delete-btn">Delete</a>

          <a class="back-btn">Back</a>
        </div>
      </div>
    </section>
  );
};
