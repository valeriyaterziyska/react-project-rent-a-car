import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


import { carServiceFactory } from "../../services/carService";
import { useService } from "../../hooks/useService";
import styles from "./CarItemDetails.module.css";

export const CarItemDetails = () => {
  const { carId } = useParams();
  const [car, setCar] = useState({});
  const carService = useService(carServiceFactory);

  useEffect(() => {
    carService.getOne(carId).then((result) => {
      setCar(result);
    });
  }, [carId]);

  return (
    <section className={styles.detailsPage} id="detailsPage">
      <div className={styles.detailsInfo} id="detailsInfo">
        <div className={styles.info}>
          <img src={car.imageUrl} />
        </div>

        <div className={styles.info}>
          <h3>Brand: {car.brand}</h3>
          <h3>Model: {car.model}</h3>
          <h2>Price per day: ${car.price}</h2>
        </div>

        {/* <!--If there is user logged in--> */}
        <div className={styles.inbuttonsfo}>
          <Link className={styles["edit-btn"]}>Edit</Link>
          <Link className={styles["delete-btn"]}>Delete</Link>

          <Link to={'/catalog'} className={styles["back-btn"]}>Back</Link>
        </div>
      </div>
    </section>
  );
};
