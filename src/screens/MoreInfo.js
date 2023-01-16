import Container from "../containers/MoreInfo";

// TODO: Define prop types for the colors prop

const MoreInfo = props => {
  return (
    <>
      <h1>Additional Info</h1>
      <Container {...props} />
    </>
  );
};

export default MoreInfo;
