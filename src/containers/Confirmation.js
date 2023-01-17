import useAxios from "axios-hooks";
import { useNavigate } from 'react-router-dom';
import Component from "../components/Confirmation";

// TODO: pull API server url from node env

const Confirmation = () => {
  const navigate = useNavigate();
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
      navigate('../success');
    } else {
      navigate('../error');
    }
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <Component submit={submit} />
  );
};

export default Confirmation;
