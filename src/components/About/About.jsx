import styles from "./About.module.scss";

const About = () => {
  const BASE_URL = import.meta.env.BASE_URL;

  return (
    <section className={styles["about"]}>
      <div
        className={
          styles["about__img-wrap"] + " " + styles["about__img-wrap--desktop"]
        }
      >
        <picture>
          <source
            srcSet={`${BASE_URL}mob/aboutus.png 1x, ${BASE_URL}mob/aboutus-2x.png 2x`}
            media="(max-width: 991px)"
          />
          <source
            srcSet={`${BASE_URL}992/aboutus.png 1x, ${BASE_URL}992/aboutus-2x.png 2x`}
            media="(min-width: 992px) and (max-width: 1365px)"
          />
          <source
            srcSet={`${BASE_URL}1366/aboutus.png 1x, ${BASE_URL}1366/aboutus-2x.png 2x`}
            media="(min-width: 1366px) and (max-width: 1919px)"
          />
          <source
            srcSet={`${BASE_URL}1920/aboutus.png 1x, ${BASE_URL}1920/aboutus-2x.png 2x`}
            media="(min-width: 1920px)"
          />
          <img
            src={`${BASE_URL}1366/aboutus.png`}
            srcSet={`${BASE_URL}1366/aboutus-2x.png 2x`}
            alt="About"
            className={styles["about__img"]}
          />
        </picture>
      </div>
      <div className={styles["about__content"]}>
        <h2 className={styles["about__title"]}>ABOUT US</h2>
        <p className={styles["about__text1"]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div
          className={
            styles["about__img-wrap"] + " " + styles["about__img-wrap--mobile"]
          }
        >
          <picture>
            <source
              srcSet={`${BASE_URL}mob/aboutus.png 1x, ${BASE_URL}mob/aboutus-2x.png 2x`}
              media="(max-width: 991px)"
            />
            <source
              srcSet={`${BASE_URL}992/aboutus.png 1x, ${BASE_URL}992/aboutus-2x.png 2x`}
              media="(min-width: 992px) and (max-width: 1365px)"
            />
            <source
              srcSet={`${BASE_URL}1366/aboutus.png 1x, ${BASE_URL}1366/aboutus-2x.png 2x`}
              media="(min-width: 1366px) and (max-width: 1919px)"
            />
            <source
              srcSet={`${BASE_URL}1920/aboutus.png 1x, ${BASE_URL}1920/aboutus-2x.png 2x`}
              media="(min-width: 1920px)"
            />
            <img
              src={`${BASE_URL}1366/aboutus.png`}
              srcSet={`${BASE_URL}1366/aboutus-2x.png 2x`}
              alt="About"
              className={styles["about__img"]}
            />
          </picture>
        </div>
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
};

export default About;
