import { useSelector } from "react-redux";
import styles from "./About.module.scss";

const About = () => {
  const about = useSelector((state) => state.content.about);

  return (
    <section className={styles["about"]}>
      <div className={styles["about__img-wrap"]}>
        <img
          src={about.image}
          alt={about.title}
          className={styles["about__img"]}
        />
      </div>
      <div className={styles["about__content"]}>
        <h2 className={styles["about__title"]}>{about.title}</h2>
        <p className={styles["about__text"]}>{about.text}</p>
        <button className={styles["about__btn"]}>{about.button}</button>
      </div>
    </section>
  );
};

export default About;
