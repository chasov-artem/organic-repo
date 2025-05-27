import { useSelector } from "react-redux";
import styles from "./Hero.module.scss";

const Hero = () => {
  const hero = useSelector((state) => state.content.hero);
  const BASE_URL = import.meta.env.BASE_URL;

  return (
    <section className={styles["hero"]}>
      <h1
        className={styles["hero__title"] + " " + styles["hero__title--mobile"]}
      >
        {hero.title}
      </h1>
      <div className={styles["hero__container"]}>
        <div className={styles["hero__img-wrap"]}>
          <picture>
            <source
              srcSet={`${BASE_URL}mob/hero.png 1x, ${BASE_URL}mob/hero-2x.png 2x`}
              media="(max-width: 991px)"
            />
            <source
              srcSet={`${BASE_URL}992/hero.png 1x, ${BASE_URL}992/hero-2x.png 2x`}
              media="(min-width: 992px) and (max-width: 1365px)"
            />
            <source
              srcSet={`${BASE_URL}1366/hero.png 1x, ${BASE_URL}1366/hero-2x.png 2x`}
              media="(min-width: 1366px) and (max-width: 1919px)"
            />
            <source
              srcSet={`${BASE_URL}1920/hero.png 1x, ${BASE_URL}1920/hero-2x.png 2x`}
              media="(min-width: 1920px)"
            />
            <img
              src={`${BASE_URL}1366/hero.png`}
              alt="Hero"
              className={styles["hero__img"]}
            />
          </picture>
        </div>
        <div className={styles["hero__content"]}>
          <h1
            className={
              styles["hero__title"] + " " + styles["hero__title--desktop"]
            }
          >
            {hero.title}
          </h1>
          <p className={styles["hero__text"]}>{hero.text}</p>
          <button className={styles["hero__btn"]}>{hero.button}</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
