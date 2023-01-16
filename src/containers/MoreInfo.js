import useAxios from 'axios-hooks'
import Component from "../components/MoreInfo";
// TODO: Need to pull in axios for hitting the API endpoints
// TODO: pull API server url from node env

const MoreInfo = props => {

  const [{ data, loading, error }] = useAxios(
    'http://localhost:3001/api/colors'
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const { colors } = data;

  return (
    <Component colors={colors} {...props} />
  );
};

export default MoreInfo;
