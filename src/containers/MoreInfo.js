import useAxios from 'axios-hooks'
import Component from "../components/MoreInfo";
// TODO: pull API server url from node env

const MoreInfo = () => {
  const [{ data, loading, error }] = useAxios(
    'http://localhost:3001/api/colors'
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  console.log(data);
  return (
    <Component colors={data} />
  );
};

export default MoreInfo;
