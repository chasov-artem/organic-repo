import { useSelector } from "react-redux";
import styles from "./Header.module.scss";

const Header = () => {
  const { logo, nav } = useSelector((state) => state.content.header);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["header__container"]}>
        <div className={styles["header__logo"]}>{logo}</div>
        <nav className={styles["header__nav"]}>
          {nav.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={styles["header__nav-item"]}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.toLowerCase().replace(" ", "-"));
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
