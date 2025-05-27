import { useSelector } from "react-redux";
import { useState } from "react";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const contact = useSelector((state) => state.content.contact);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const BASE_URL = import.meta.env.BASE_URL;

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
                <span className={styles["custom-placeholder"]}>
                  Enter your name
                </span>
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
                  Enter a valid email address
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
          <picture>
            <source
              srcSet={`${BASE_URL}mob/followus.png 1x, ${BASE_URL}mob/followus-2x.png 2x`}
              media="(max-width: 991px)"
            />
            <source
              srcSet={`${BASE_URL}992/followus.png 1x, ${BASE_URL}992/followus-2x.png 2x`}
              media="(min-width: 992px) and (max-width: 1365px)"
            />
            <source
              srcSet={`${BASE_URL}1366/followus.png 1x, ${BASE_URL}1366/followus-2x.png 2x`}
              media="(min-width: 1366px) and (max-width: 1919px)"
            />
            <source
              srcSet={`${BASE_URL}1920/followus.png 1x, ${BASE_URL}1920/followus-2x.png 2x`}
              media="(min-width: 1920px)"
            />
            <img
              src={`${BASE_URL}1366/followus.png`}
              srcSet={`${BASE_URL}1366/followus-2x.png 2x`}
              alt="Follow Us"
              className={styles["contact__img"]}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
