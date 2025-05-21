import { useSelector } from "react-redux";
import styles from "./Header.module.scss";

const Header = () => {
  const { logo, nav } = useSelector((state) => state.content.header);

  return (
    <header className={styles["header"]}>
      <div className={styles["header__logo"]}>{logo}</div>
      <nav className={styles["header__nav"]}>
        {nav.map((item, idx) => (
          <a key={idx} href="#" className={styles["header__nav-item"]}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
