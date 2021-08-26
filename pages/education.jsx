const EducationPage = () => {
  return (
    <>
      <h1>Education</h1>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Education" },
  };
}

export default EducationPage;
