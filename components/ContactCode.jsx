import styles from "../styles/ContactCode.module.css";

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{" "}
        <a href="/" target="_blank" rel="noopener">
          annavasileva.me
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{" "}
        <a
          href="mailto:nitinranganath@gmail.com"
          target="_blank"
          rel="noopener"
        >
          vasilec1992@yandex.ru
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{" "}
        <a href="https://github.com/itsnitinr" target="_blank" rel="noopener">
          vasilec92
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/anna-vasileva-610bb36b/"
          target="_blank"
          rel="noopener"
        >
          Anna Vasileva
        </a>
        ;
      </p>

      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
