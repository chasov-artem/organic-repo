import styles from "./About.module.scss";

const About = () => (
  <section className={styles["about"]}>
    <div className={styles["about__img-wrap"]}>
      <img
        src="/frame1/aboutus.png"
        srcSet="/frame1/aboutus-2x.png 2x"
        alt="About"
        className={styles["about__img"]}
      />
    </div>
    <div className={styles["about__content"]}>
      <h2 className={styles["about__title"]}>ABOUT US</h2>
      <p className={styles["about__text1"]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p className={styles["about__text2"]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <button className={styles["about__btn"]}>LEARN MORE</button>
    </div>
  </section>
);

export default About;
