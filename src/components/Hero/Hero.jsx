import { useSelector } from "react-redux";
import styles from "./Hero.module.scss";

const Hero = () => {
  const hero = useSelector((state) => state.content.hero);

  return (
    <section className={styles["hero"]}>
      <div className={styles["hero__container"]}>
        <div className={styles["hero__img-wrap"]}>
          <picture>
            <source
              srcSet="/mob/hero.png 1x, /mob/hero-2x.png 2x"
              media="(max-width: 991px)"
            />
            <img
              src="/frame1/hero.png"
              alt="Hero"
              className={styles["hero__img"]}
            />
          </picture>
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
