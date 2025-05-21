import { useSelector } from "react-redux";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const contact = useSelector((state) => state.content.contact);

  return (
    <section className={styles["contact"]}>
      <div className={styles["contact__content"]}>
        <h2 className={styles["contact__title"]}>Follow Us</h2>
        <div className={styles["contact__socials"]}>
          {contact.socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              className={styles["contact__social"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.name}
            </a>
          ))}
        </div>
        <form className={styles["contact__form"]}>
          {contact.form.fields.map((f) => (
            <input
              key={f.name}
              name={f.name}
              placeholder={f.placeholder}
              className={styles["contact__input"]}
              type={f.name === "email" ? "email" : "text"}
            />
          ))}
          <button className={styles["contact__btn"]} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className={styles["contact__img-wrap"]}>
        <img
          src={contact.image}
          alt="Follow us"
          className={styles["contact__img"]}
        />
      </div>
    </section>
  );
};

export default ContactForm;
