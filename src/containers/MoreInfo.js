import useAxios from 'axios-hooks'
import { useNavigate } from 'react-router-dom';
import { 
  Box,
  CircularProgress,
} from "@mui/material";
import Component from "../components/MoreInfo";

const GET_COLORS_ENDPOINT = 'http://localhost:3001/api/colors'

const MoreInfo = () => {
  const navigate = useNavigate();
  const [{ data, loading, error }] = useAxios(GET_COLORS_ENDPOINT)

  if (loading) {
    return <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>;
  }

  if (error) {
    navigate('../error');
  }

  console.log(data);
  return (
    <Component colors={data} />
  );
};

export default MoreInfo;
