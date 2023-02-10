const CvPage = () => {
  return (
    <>
      <h1>CV</h1>
      <iframe src="./CV-Anna_Vasileva.pdf" width="100%" height="100%"></iframe>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "CV" },
  };
}

export default CvPage;
