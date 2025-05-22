import { useSelector } from "react-redux";
import styles from "./NewCollection.module.scss";

const NewCollection = () => {
  const newCollection = useSelector((state) => state.content.newCollection);
  const description = useSelector(
    (state) => state.content.newCollectionDescription
  );

  return (
    <section className={styles["new-collection"]}>
      <h2 className={styles["new-collection__title"]}>New Collection</h2>
      <div className={styles["new-collection__items"]}>
        {newCollection.map((item) => (
          <div key={item.id} className={styles["new-collection__item"]}>
            <div className={styles["new-collection__img-arc"]}>
              <img
                src={item.image}
                srcSet={`${item.image2x} 2x`}
                alt={item.title}
                className={styles["new-collection__img"]}
              />
            </div>
            <div className={styles["new-collection__name"]}>{item.title}</div>
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
