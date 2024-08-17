import { useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


import { carServiceFactory } from "../../services/carService";
import { useService } from "../../hooks/useService";
import styles from "./CarItemDetails.module.css";

export const CarItemDetails = () => {
  const {userId} = useContext(AuthContext);
  const { carId } = useParams();
  const [car, setCar] = useState({});
  const carService = useService(carServiceFactory);
  const navigate = useNavigate();

  useEffect(() => {
    carService.getOne(carId).then((result) => {
      setCar(result);
    });
  }, [carId]);

  const isOwner = car._ownerId === userId;
  
  const onDeleteClick = async () => {
    await carService.delete(car._id);

    navigate('/catalog');
  }

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
        {isOwner && (
          <div className={styles.inbuttonsfo}>
          <Link className={styles["edit-btn"]}>Edit</Link>
          <Link className={styles["delete-btn"]} onClick={onDeleteClick}>Delete</Link>

          <Link to={'/catalog'} className={styles["back-btn"]}>Back</Link>
        </div>
        )}
        
      </div>
    </section>
  );
};
