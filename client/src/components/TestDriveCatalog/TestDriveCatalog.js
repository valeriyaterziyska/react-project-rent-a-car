export const TestDriveCatalog = () => {
    return (
        <section id="viewCatalog" className="background-img">
  <h3>Available cars for test drive</h3>
  {/* <!--If there are one or more cars--> */}
  <div>
    <div  className="added-cars">
      <div className="added-cars-in-market">
        <img
        src=""
        className="picture-added-cars"
        
        />
        <h3>Brand and model</h3>
        <span>Price per day: $</span>
      </div>
    </div>
  </div>
  {/* <!--If there are no cars in catalog yet--> */}
  <div >
    <div className="guest">There are no available cars for test drive...</div>
  </div>
</section>

    );
}