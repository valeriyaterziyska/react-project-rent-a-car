export const Catalog = () => {
  <section id="viewCatalog" class="background-img">
    {/* <!--If there are one or more cars--> */}
    <div>
      <div class="added-cars">
        <div class="added-cars-in-market">
          <img class="picture-added-cars" src="{{car.imageUrl}}" />
          {/* <!-- Merge Brand and model --> */}
          {/* <h3>{{car.brand}} {{car.model}}</h3>  */}
          {/* <span>Price per day: ${{car.price}}</span> */}
        </div>
      </div>
    </div>

    {/* // <!--If there are no cars in catalog yet--> */}
    <div>
      <div class="guest">There are no cars found...</div>
    </div>
  </section>;
};
