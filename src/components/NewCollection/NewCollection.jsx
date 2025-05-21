import { useSelector } from "react-redux";
import styles from "./NewCollection.module.scss";

const NewCollection = () => {
  const newCollection = useSelector((state) => state.content.newCollection);

  return (
    <section className={styles["new-collection"]}>
      <h2 className={styles["new-collection__title"]}>New Collection</h2>
      <div className={styles["new-collection__items"]}>
        {newCollection.map((item) => (
          <div key={item.id} className={styles["new-collection__item"]}>
            <img
              src={item.image}
              alt={item.title}
              className={styles["new-collection__img"]}
            />
            <div className={styles["new-collection__name"]}>{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewCollection;
