import styles from "../styles/ContactCode.module.css";
const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>

      <p className={styles.text}>
        Étudiante en développement informatique, je suis une personne curieuse
        et passionnée par les nouvelles technologies. J'ai à cœur de concevoir
        des solutions informatiques principalement dans le développement web en
        fonction des besoins et des missions qui me sont confiées.
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
