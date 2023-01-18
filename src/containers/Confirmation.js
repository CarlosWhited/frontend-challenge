import useAxios from "axios-hooks";
import { useNavigate } from 'react-router-dom';
import { 
  Box,
  CircularProgress,
} from "@mui/material";
import Component from "../components/Confirmation";

const SUBMIT_ENDPOINT = 'http://localhost:3001/api/submit'

const Confirmation = () => {
  const navigate = useNavigate();
  const [
    { data, loading, error },
    submitForm
  ] = useAxios(
    {
      url: SUBMIT_ENDPOINT,
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

  if (loading) {
    return <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>;
  }

  if (error) {
    navigate('../error');
  }

  return (
    <Component submit={submit} />
  );
};

export default Confirmation;
