import Tab from "./Tab";
import styles from "../styles/Tabsbar.module.css";

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home" path="/" />
      <Tab icon="/html_icon.svg" filename="about" path="/about" />
      <Tab icon="/json_icon.svg" filename="cv" path="/cv" />
      <Tab icon="/css_icon.svg" filename="contact" path="/contact" />
      <Tab icon="/js_icon.svg" filename="projects" path="/projects" />
    </div>
  );
};

export default Tabsbar;
