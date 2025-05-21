import { useSelector } from "react-redux";
import styles from "./Footer.module.scss";

const Footer = () => {
  const { text } = useSelector((state) => state.content.footer);

  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__text"]}>{text}</div>
    </footer>
  );
};

export default Footer;
