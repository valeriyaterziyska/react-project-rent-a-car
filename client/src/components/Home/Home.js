import styles from './Home.module.css';

export const Home = () => {
  return (
    <section id="homePage" className="background-img">
      <div className={styles.introduction}>
        <br />
        <h1>The newest rent-a-car website for luxury cars!</h1>
        <hr className="horizontal-line" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          tempore repudiandae fuga nemo placeat facere voluptatibus.
        </p>
      </div>
    </section>
  );
};
