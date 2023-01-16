import useAxios from "axios-hooks";
import Component from "../components/Confirmation";
import withRouter from '../utils/withRouter';

// TODO: pull API server url from node env

const Confirmation = props => {
  const [
    { data, loading, error },
    submitForm
  ] = useAxios(
    {
      url: 'http://localhost:3001/api/submit',
      method: 'POST'
    },
    { manual: true }
  )
  
  const submit = async (userInfo) => {
    const response = await submitForm({
      data: userInfo,
    });

    if (response.status === 200) {
      props.history.push("../screens/Success");
    } else {
      props.history.push("../screens/Error");
    }
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <Component submit={submit} {...props} />
  );
};

export default withRouter(Confirmation);
