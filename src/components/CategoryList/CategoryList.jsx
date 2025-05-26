import { useSelector } from "react-redux";
import styles from "./CategoryList.module.scss";

const CategoryList = () => {
  const categories = useSelector((state) => state.content.categories);

  return (
    <section className={styles["category-list"]}>
      <h2
        className={
          styles["category-list__title"] +
          " " +
          styles["category-list__title--mobile"]
        }
      >
        SHOP BY CATEGORIES
      </h2>
      <h2
        className={
          styles["category-list__title"] +
          " " +
          styles["category-list__title--desktop"]
        }
      >
        <span className={styles["category-list__title-top"]}>SHOP BY</span>
        <span className={styles["category-list__title-bottom"]}>
          CATEGORIES
        </span>
      </h2>
      <div className={styles["category-list__items"]}>
        {categories.slice(0, 4).map((cat, idx) => (
          <div key={cat.id} className={styles["category-list__item"]}>
            <picture>
              <source
                srcSet={`/mob/shop${idx + 1}.png 1x, /mob/shop${
                  idx + 1
                }-2x.png 2x`}
                media="(max-width: 991px)"
              />
              <source
                srcSet={`/992/shop${idx + 1}.png 1x, /992/shop${
                  idx + 1
                }-2x.png 2x`}
                media="(min-width: 992px) and (max-width: 1365px)"
              />
              <source
                srcSet={`/frame1/shop${idx + 1}.png 1x, /frame1/shop${
                  idx + 1
                }-2x.png 2x`}
                media="(min-width: 1366px)"
              />
              <img
                src={cat.image}
                srcSet={`${cat.image2x} 2x`}
                alt={cat.title}
                className={styles["category-list__img"]}
              />
            </picture>
          </div>
        ))}
      </div>
      {categories[4] && (
        <div className={styles["category-list__stripe-img-wrap"]}>
          <picture>
            <source
              srcSet="/mob/shop5.png 1x, /mob/shop5-2x.png 2x"
              media="(max-width: 991px)"
            />
            <source
              srcSet="/992/shop5.png 1x, /992/shop5-2x.png 2x"
              media="(min-width: 992px) and (max-width: 1365px)"
            />
            <source
              srcSet="/frame1/shop5.png 1x, /frame1/shop5-2x.png 2x"
              media="(min-width: 1366px)"
            />
            <img
              src={categories[4].image}
              srcSet={`${categories[4].image2x} 2x`}
              alt={categories[4].title}
              className={styles["category-list__stripe-img"]}
            />
          </picture>
        </div>
      )}
    </section>
  );
};

export default CategoryList;
