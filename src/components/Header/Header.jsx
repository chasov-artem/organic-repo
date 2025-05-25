import { useSelector } from "react-redux";
import styles from "./Header.module.scss";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const { logo, nav } = useSelector((state) => state.content.header);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
        <button
          className={styles["header__burger"]}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Відкрити меню"
        >
          <span className={styles["header__burger-line"]}></span>
          <span className={styles["header__burger-line"]}></span>
          <span className={styles["header__burger-line"]}></span>
        </button>
        {menuOpen && (
          <div className={styles["header__mobile-menu-overlay"]}>
            <nav className={styles["header__mobile-menu"]} ref={menuRef}>
              {nav.map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={styles["header__mobile-nav-item"]}
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
        )}
      </div>
    </header>
  );
};

export default Header;
