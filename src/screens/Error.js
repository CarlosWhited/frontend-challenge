import { useNavigate } from 'react-router-dom';
import {
  Button,
  Typography,
  Container,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { useStateMachine } from "little-state-machine";
import { reset } from '../actions/SignUpFlow';
import PageHeader from '../components/PageHeader';
import { red } from '@mui/material/colors';

const Error = () => {
  const navigate = useNavigate();
  const { actions } = useStateMachine({ reset });

  const restartFlow = () => {
    actions.reset();
    navigate('../');
  }

  return (
    <>
      <PageHeader title="Error"/>
      <Container>
        <CancelIcon fontSize="large" sx={{ color: red[500] }}/>
      </Container>
      <Container>
        <Typography variant="body1" align='center'>
          Uh oh, something went wrong. Please try again later.
        </Typography>
      </Container>
      <Container sx={{ paddingTop: 4 }}>
        <Button variant="contained" color="success" onClick={restartFlow}>
          Restart
        </Button>
      </Container>
    </>
  );
};

export default Error;
