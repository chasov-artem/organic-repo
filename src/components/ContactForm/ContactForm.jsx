import { useSelector } from "react-redux";
import { useState } from "react";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const contact = useSelector((state) => state.content.contact);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className={styles["contact"]}>
      <div className={styles["contact__bg-left"]}></div>
      <div className={styles["contact__bg-right"]}></div>
      <div className={styles["contact__container"]}>
        <div className={styles["contact__form-wrap"]}>
          <h2 className={styles["contact__title"]}>Follow Us</h2>
          <form className={styles["contact__form"]}>
            <div className={styles["input-wrap"]}>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={styles["contact__input"]}
                type="text"
                autoComplete="off"
              />
              {!form.name && (
                <span className={styles["custom-placeholder"]}>Your name</span>
              )}
            </div>
            <div className={styles["input-wrap"]}>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className={styles["contact__input"]}
                type="email"
                autoComplete="off"
              />
              {!form.email && (
                <span className={styles["custom-placeholder"]}>
                  Your email address
                </span>
              )}
            </div>
            <div className={styles["input-wrap"]}>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className={styles["contact__input"]}
              />
              {!form.message && (
                <span className={styles["custom-placeholder"]}>
                  Enter your message
                </span>
              )}
            </div>
            <button className={styles["contact__btn"]} type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className={styles["contact__img-wrap"]}>
          <img
            src={contact.image}
            srcSet={`${contact.image2x} 2x`}
            alt="Follow us"
            className={styles["contact__img"]}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
