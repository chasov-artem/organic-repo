import { useSelector } from "react-redux";
import styles from "./CategoryList.module.scss";

const CategoryList = () => {
  const categories = useSelector((state) => state.content.categories);
  const stripe = categories[categories.length - 1];

  return (
    <section className={styles["category-list"]}>
      <h2 className={styles["category-list__title"]}>Shop by Categories</h2>
      <div className={styles["category-list__items"]}>
        {categories.slice(0, 5).map((cat) => (
          <div key={cat.id} className={styles["category-list__item"]}>
            <img
              src={cat.image}
              srcSet={`${cat.image2x} 2x`}
              alt={cat.title}
              className={styles["category-list__img"]}
            />
          </div>
        ))}
      </div>
      <div className={styles["category-list__stripe-img-wrap"]}>
        <img
          src={stripe.image}
          srcSet={`${stripe.image2x} 2x`}
          alt={stripe.title}
          className={styles["category-list__stripe-img"]}
        />
      </div>
    </section>
  );
};

export default CategoryList;
