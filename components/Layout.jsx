import Sidebar from "../components/Sidebar";
import Tabsbar from "./Tabsbar";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.main}>
        <Sidebar />
        <div style={{ width: "100%" }}>
          <Tabsbar />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
