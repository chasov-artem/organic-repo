import { useSelector } from "react-redux";
import styles from "./Hero.module.scss";

const Hero = () => {
  const hero = useSelector((state) => state.content.hero);

  return (
    <section className={styles["hero"]}>
      <div className={styles["hero__container"]}>
        <div className={styles["hero__img-wrap"]}>
          <img src={hero.image} alt="Plant" className={styles["hero__img"]} />
        </div>
        <div className={styles["hero__content"]}>
          <h1 className={styles["hero__title"]}>{hero.title}</h1>
          <p className={styles["hero__text"]}>{hero.text}</p>
          <button className={styles["hero__btn"]}>{hero.button}</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
