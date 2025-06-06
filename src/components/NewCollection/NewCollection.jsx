import { useSelector } from "react-redux";
import styles from "./NewCollection.module.scss";

const NewCollection = () => {
  const newCollection = useSelector((state) => state.content.newCollection);
  const description = useSelector(
    (state) => state.content.newCollectionDescription
  );
  const BASE_URL = import.meta.env.BASE_URL;

  return (
    <section className={styles["new-collection"]}>
      <div className={styles["new-collection__bg"]}></div>
      <h2
        className={
          styles["new-collection__title"] +
          " " +
          styles["new-collection__title--mobile"]
        }
      >
        NEW COLLECTION
      </h2>
      <h2
        className={
          styles["new-collection__title"] +
          " " +
          styles["new-collection__title--desktop"]
        }
      >
        NEW COLLECTION
      </h2>
      <div className={styles["new-collection__items"]}>
        {newCollection.map((item, idx) => (
          <div key={item.id} className={styles["new-collection__item"]}>
            <div className={styles["new-collection__img-arc"]}>
              <picture>
                <source
                  srcSet={`${BASE_URL}mob/collection${
                    idx + 1
                  }.png 1x, ${BASE_URL}mob/collection${idx + 1}-2x.png 2x`}
                  media="(max-width: 991px)"
                />
                <source
                  srcSet={`${BASE_URL}992/collection${
                    idx + 1
                  }.png 1x, ${BASE_URL}992/collection${idx + 1}-2x.png 2x`}
                  media="(min-width: 992px) and (max-width: 1365px)"
                />
                <source
                  srcSet={`${BASE_URL}1366/collection${
                    idx + 1
                  }.png 1x, ${BASE_URL}1366/collection${idx + 1}-2x.png 2x`}
                  media="(min-width: 1366px) and (max-width: 1919px)"
                />
                <source
                  srcSet={`${BASE_URL}1920/collection${
                    idx + 1
                  }.png 1x, ${BASE_URL}1920/collection${idx + 1}-2x.png 2x`}
                  media="(min-width: 1920px)"
                />
                <img
                  src={`${BASE_URL}1366/collection${idx + 1}.png`}
                  srcSet={`${BASE_URL}1366/collection${idx + 1}-2x.png 2x`}
                  alt={item.title}
                  className={styles["new-collection__img"]}
                />
              </picture>
            </div>
          </div>
        ))}
      </div>
      <div className={styles["new-collection__desc-wrap"]}>
        <p className={styles["new-collection__desc"]}>{description}</p>
      </div>
    </section>
  );
};

export default NewCollection;
