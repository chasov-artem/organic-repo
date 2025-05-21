import { useSelector } from "react-redux";
import styles from "./CategoryList.module.scss";

const CategoryList = () => {
  const categories = useSelector((state) => state.content.categories);

  return (
    <section className={styles["category-list"]}>
      <h2 className={styles["category-list__title"]}>Shop by Categories</h2>
      <div className={styles["category-list__items"]}>
        {categories.map((cat) => (
          <div key={cat.id} className={styles["category-list__item"]}>
            <img
              src={cat.image}
              alt={cat.title}
              className={styles["category-list__img"]}
            />
            <div className={styles["category-list__name"]}>{cat.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
